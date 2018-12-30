const {exec} = require("child_process");
const {get} = require("https");
const {promisify} = require("util");
const execAsync = promisify(exec);
const getAsync = url => new Promise(resolve => get(url, resolve));

//process.env.TRAVIS_BRANCH = `ci-test`;

const TARGET_BRANCH = `ci-test`;
const TARGET_FILE = "cnames_active.js";

// puts the line into a JSON object, tries to parse and returns a JS object or undefiend
function checkJSON(line) {
  try {
    let re = JSON.parse(`{"_":"" ${line}}`);
    delete re._;
    return re;
  } catch (e) {}
}

// test wheather a redirect is in place and the target is correct
async function checkCNAME(domain, target) {
  const {
    headers,
    statusCode
  } = await getAsync(target);

  console.assert(
    statusCode >= 300 && statusCode < 400,
    `${target} has to redirect using a CNAME file`
  );

  const targetLocation = String(headers.location).replace(/^https/, "http").replace(/\/$/,'');
  console.assert(
    targetLocation === domain,
    `${target} is redirecting to ${targetLocation} instead of ${domain}`
  );
}

const result = (async () => {

  console.log(process.env.TRAVIS_BRANCH);
  
  // check what files have changed
  const filesDiffExec = await execAsync(`git diff ${TARGET_BRANCH} --name-only`);
  const filesChanged = filesDiffExec.stdout.split("\n").filter(file => file);
  
  // if changes don't target the 'cnames_active.js' in 'master' branch do nothing
  if (process.env.TRAVIS_BRANCH !== TARGET_BRANCH || !filesChanged.includes(TARGET_FILE)) {
    console.log(
      `is not not targeting ${TARGET_FILE} in ${TARGET_BRANCH} - skipping all tests`
    );
    return;
  }

  // ... otherwise no other file should be changed
  console.info("Test number of files changed");
  console.assert(
    filesChanged.length === 1,
    `You may change only ${TARGET_FILE}`
  );

  // check what was changed in 'cnames_active.js'
  const fileDiffExec = await execAsync(`git diff ${TARGET_BRANCH} ${TARGET_FILE}`);
  const fileChanges = fileDiffExec.stdout.split("\n").slice(5);

  // get an array of all lines in the 'git diff' that hold a record (strip block comments, etc.)
  const recordLines = fileChanges.filter(line => /s*"[\w\d]+":\s*".+".*/g.test(line));

  // get the added lines
  const linesAdded = recordLines.filter(line => line.startsWith("+")).map(line => line.substr(1));

  // only one line should be added (or modified!) in one PR (don't apply any limit when removal gets implemented; we should be happy when people keep the list up-to-date)
  console.info("Test number of changes");
  console.assert(
    linesAdded.length <= 1,
    `You may only add or modify one line per pull request`
  );


  if (linesAdded.length) {
    // get the one line that has been added
    let lineAdded = linesAdded[0];

    // get all the resulting lines in the 'git diff' 
    const linesNew = recordLines.filter(line => !line.startsWith("-")).map(line => line.substr(1));

    // check for alphabetical order
    console.info("Test alphabetical order");
    linesNew.forEach((line, i) => {
      if (i)
        console.assert(
          `${line}`.localeCompare(`${linesNew[i - 1]}`) !== -1,
          `You should keep the list in alphabetical order`
        );
    });

    // check for a leading comma (propably a common error; would also show up when JSON parsing gets tried)
    console.assert(
      lineAdded.startsWith(","),
      `You should seperate your record with comma in the beginning`
    );

    // check for a line comment
    const lineComment = /\/\/.*/g.exec(lineAdded);
    if (lineComment) {
      // remove the comment from the line in preparation for JSON parsing
      lineAdded = lineAdded.substr(0, lineComment.index);

      // check whether the comment is valid
      console.info("Test comment");
      console.assert(
        lineComment[0].match(/\s*\/\/\s*noCF/g),
        `You are are using a comment that is invalid or no longer supported`
      );
    }

    // try to parse the added line and get back a JS object in case of success 
    const recordAdded = checkJSON(lineAdded);

    // check the result of the parsing attempt
    console.info("Test JSON");
    console.assert(
      typeof recordAdded === "object",
      `Could not parse ${lineAdded}`
    );

    // get the key of the record
    const recordKey = Object.keys(recordAdded)[0];
    // get the value of the record
    const recordValue = recordAdded[recordKey];

    // check formatting (copy&past from a browser adressbar often results in an URL)
    console.info("Test formatting");
    console.assert(
      !recordValue.match(/(http(s?))\:\/\//gi) && !recordValue.endsWith("/"),
      `The target value should not start with 'http(s)://' and should not end with a '/'`
    );


    console.log("Found one additonal record: ", recordAdded);

    // check if the target of of the record is a GitHub Page
    if (recordValue.match(/.github\.io/g)) {
      console.info("Test CNAME");
      // check the presence of a CNAME
      await checkCNAME(`http://${recordKey}.js.org`, `https://${recordValue}`);
    }

    // there is still no auto-merge, because a human should check the content of the added page
    console.log("All tests passed - your request should be processed soon!");
  }

})();

// Exit in case of any error
result.catch(err => {
  console.error(err.message);
  console.info("Some CI tests have returned an error - if you dont't know what to do just wait until a human had a look");
  process.exit(1);
});
