module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"scope-empty": [2, "never"],
		"type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test"]],
		"scope-case": [
			2,
			"always",
			[
				"lower-case", // default
				// "upper-case", // UPPERCASE
				"camel-case" // camelCase
				// "kebab-case", // kebab-case
				// "pascal-case", // PascalCase
				// "sentence-case", // Sentence case
				// "snake-case", // snake_case
				// "start-case" // Start Case
			]
		]
	}
};
