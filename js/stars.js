const stars = document.querySelectorAll('div');
const hyper = document.getElementById('hyper');
const hyperScale = document.getElementById('hyper-range');

stars.forEach((star,i) => {
  let x = `${Math.random() * 200}vmax`
  let y = `${Math.random() * 100}vh`
  let z = `${Math.random() * 200 - 100}vmin`
  let rx = `${Math.random() * 360}deg`
  star.style.setProperty('--x', x)
  star.style.setProperty('--y', y)
  star.style.setProperty('--z', z)
  star.style.setProperty('--rx', rx)
});

hyper && hyper.addEventListener('click', e => {
  if (document.documentElement.classList.contains('hyper')) {
    stars.forEach((star,i) => {
      star.style.animationName = null;
      //star.style.animationIterationCount = 1;
    });
    hyper.textContent = 'Go Hyper';
  } else {
    stars.forEach((star,i) => {
      let delay = `${Math.random() * 900}ms`;
      star.style.animationDelay = delay;
      star.style.animationName = 'hyper';
    });
    hyper.textContent = 'Stop Hyper';
  }
  document.documentElement.classList.toggle('hyper');
});





if (document.getAnimations) {
  stars.forEach((star,i) => {
    let delay = `${Math.random() * 900}ms`;
    star.style.animationDelay = delay;
    star.style.animationName = 'hyper';
  });
  const animations = document.getAnimations();
  animations.forEach(a => a.updatePlaybackRate(0));
  if (animations.length && animations[0].updatePlaybackRate) {
    document.documentElement.classList.add('css-animations')
    hyperScale.addEventListener('input', e => {
      const value = parseFloat(e.currentTarget.value);
      animations.forEach(a => a.updatePlaybackRate(value));
    })
  } else {
    stars.forEach((star,i) => {
      star.style.animationName = null;
    });
  }
}