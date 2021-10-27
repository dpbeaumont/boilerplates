module.exports = {
	extends: [
		'@elanco/eslint-config-typescript',
		'prettier'
	],
	plugins: [
	],
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	env: {
	} ,
	ignorePatterns: ["setupTests.js"],
	settings: {
    "import/resolver": {
      typescript: {}
    },
  },
  rules: {
	  'max-classes-per-file': 0,
	  'no-restricted-syntax': 0,
	  'no-await-in-loop': 0,

  }
}
