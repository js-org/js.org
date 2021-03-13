type Provider = {
	provider: string;
	count: number;
};

type Message = { type: "error" | "warning"; message: string; line?: number };

type Annotation = {
	file: string;
	line: number;
	title: string;
	message: string;
	annotation_level: "notice" | "warning" | "failure";
};

type Cname = {
	target: string;
	noCF?: string;
	http?: string;
	https?: string;
	failed?: boolean;
	key: string;
};
