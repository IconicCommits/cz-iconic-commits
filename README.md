# cz-iconic-commits

[![Iconic Commits](https://img.shields.io/badge/Iconic%20Commits-0.1.0-%23ffdd67?style=for-the-badge)](https://github.com/IconicCommits/specification)

status:
[![NPM Version](https://img.shields.io/npm/v/cz-iconic-commits?style=for-the-badge)](https://www.npmjs.org/package/cz-iconic-commits)
[![NPM Downloads](https://img.shields.io/npm/dm/cz-iconic-commits?style=for-the-badge)](https://npm-stat.com/charts.html?package=cz-iconic-commits&from=2025-04-01)


Part of the [Iconic Commits](https://github.com/IconicCommits/specification) family. Prompts for the [Iconic Commits](https://github.com/IconicCommits/specification) standard.

## Configuration

### package.json

Like commitizen, you specify the configuration of cz-iconic-commits through the package.json's `config.commitizen` key.

```json5
{
// ...  default values
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-iconic-commits",
            "disableScopeLowerCase": false,
            "disableSubjectLowerCase": false,
            "maxHeaderWidth": 100,
            "maxLineWidth": 100,
            "defaultIntention": "",
            "defaultType": "",
            "defaultScope": "",
            "defaultSubject": "",
            "defaultBody": "",
            "defaultIssues": "",
            "types": [
              ...
              {
                "name": "feat",
                "description": "A new feature",
                "title": "Features",
              },
              ...
            ],
            "intentions": [
              ...
              {
                "emoji": "😎",
                "entity": "&#x1f60e;",
                "code": ":sunglasses:",
                "description": "Write code like a boss.",
                "name": "sunglasses",
                "defaultType": null,
                "semver": null,
              },
              ...
            ]
        }
    }
// ...
}
```

### Environment variables

The following environment variables can be used to override any default configuration or package.json based configuration.

* CZ_INTENTION = defaultIntention
* CZ_TYPE = defaultType
* CZ_SCOPE = defaultScope
* CZ_SUBJECT = defaultSubject
* CZ_BODY = defaultBody
* CZ_MAX_HEADER_WIDTH = maxHeaderWidth
* CZ_MAX_LINE_WIDTH = maxLineWidth

### Commitlint

If using the [commitlint](https://github.com/conventional-changelog/commitlint) js library, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 100.  This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.