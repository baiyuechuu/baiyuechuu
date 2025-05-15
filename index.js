import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const quotesFilePath = path.resolve(__dirname, "quotes.json");
const readmePath = path.resolve(__dirname, "README.md");

const DefaultQuote = {
	quote: "“醉里挑灯看剑，醒时一笑看尽红尘。”",
	author: "Baiyuechu111",
};

const getQuote = () => {
	try {
		const data = readFileSync(quotesFilePath, "utf8");
		const quotes = JSON.parse(data);
		if (quotes.length > 0) {
			return quotes[Math.floor(Math.random() * quotes.length)] || DefaultQuote;
		}
		return DefaultQuote;
	} catch (err) {
		console.error("Error reading quotes file:", err);
		return DefaultQuote;
	}
};

const updateReadme = (quoteBlock) => {
	try {
		let readmeContent = readFileSync(readmePath, "utf8");

		const headingRegex = /^#\s*<p>Hi,\s*I['’]m\s*Baiyue\s*Chu.*?<\/p>/im;
		const match = readmeContent.match(headingRegex);
		if (!match) return;

		const headingLine = match[0];

		const pattern = new RegExp(
			`(${headingLine})(\\n+> _\\*\\*.*?\\*\\*_ - .*?\\n+)?`,
			"si",
		);

		const updatedContent = readmeContent.replace(
			pattern,
			`$1\n\n${quoteBlock}`,
		);

		writeFileSync(readmePath, updatedContent, "utf8");
	} catch (err) {
		console.error("Error updating README:", err);
	}
};

(async () => {
	const { quote, author } = getQuote();
	const quoteBlock = `> _**${quote}**_ - ${author}\n\n`;

	if (quote && author) {
		updateReadme(quoteBlock);
	}
})();
