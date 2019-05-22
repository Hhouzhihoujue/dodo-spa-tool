#!/usr/bin/env node

const { CLIEngine } = require('eslint');
const { resolve } = require('path');
const program = require('commander');

const { log } = require('../lib/utils');
const lintConfig = require('../lib/lint/index');
const { version } = require('../package.json');

program
	.version(version)
	.option('--fix', 'Automatically fix problems')
	.parse(process.argv);

const fix = !!program.fix;
const cli = new CLIEngine(lintConfig({ fix }));
const report = cli.executeOnFiles([resolve('./src')]);

const formatter = cli.getFormatter();
const errorReport = CLIEngine.getErrorResults(report.results);

if (errorReport.length === 0) {
	log.info('eslint success.');
	return;
}

console.log(formatter(errorReport));
