'format cjs';

var engine = require('./engine');
var conventionalCommitTypes = require('./data/conventional-commit-types.json');
var gitmojis = require('./data/gitmojis.json');
var configLoader = require('commitizen').configLoader;

var config = configLoader.load() || {};
var options = {
  intentions: config.intentions || gitmojis.gitmojis,
  types: config.types || conventionalCommitTypes.types,
  defaultIntention: process.env.CZ_INTENTION || config.defaultIntention,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  disableScopeLowerCase:
    process.env.DISABLE_SCOPE_LOWERCASE || config.disableScopeLowerCase,
  disableSubjectLowerCase:
    process.env.DISABLE_SUBJECT_LOWERCASE || config.disableSubjectLowerCase,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100
};

module.exports = engine(options);