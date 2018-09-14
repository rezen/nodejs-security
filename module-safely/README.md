# module-safely
When you install community contributed packages you allow the outside
into your application. 


### npm
#### postinstall
With npm install modules can specify any arbitray code execution with the postinstall hook.
Generally packages use postinstall for compiling native addons are adding boilerplate to 
your project. Despite most publishers good behaviours there are always "bad-apples".
 
#### Example
```js
{
  "name": "muy-mal"
  // ...
  "scripts": {
    "postinstall": "echo muahhahahaaa!!!! && rm -rf ~/"
  }
  // ....
}
```

If `muy-mal` somehow got into npm and you somehow installed it, you could end up
having a bad day with data loss

#### Remedy

By default you can make node ignore scripts
`npm config set ignore-scripts true`

`npm install --ignore-scripts`
- Wont work with native modules sqlite3?



http://arstechnica.com/security/2016/06/college-student-schools-govs-and-mils-on-perils-of-arbitrary-code-execution/
https://blog.liftsecurity.io/2015/01/27/a-malicious-module-on-npm
http://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability
https://ponyfoo.com/articles/npm-meltdown-security-concerns

## Detour on semver
https://docs.npmjs.com/misc/semver

Exact version, nothing should ever break
`"minimatch": "3.0.0"`

Allow patches if minor version is specified 
or minor upgrades if no minor is specified
`"minimatch": "~3.0.0"`
`"minimatch": "^3.0.0"`

# npm will give you a warning
npm install minimatch@3.0.0

### nsp
https://nodesecurity.io
https://nodesecurity.io/resources
A handy CLI tool to help identify known vulnerabilities in project package.json
Also monitoring of modules

npm install -g nsp
nsp check package.json


### snyk
https://snyk.io/
npm install -g snyk
snyk test ionic@1.6.5
snyk test

snyk wizard (connects to github)

snyk monitor 
Get emailed if there is a new vuln for one of your packages
 
https://snyk.io/test
https://snyk.io/test/github/sahat/hackathon-starter
https://snyk.io/test/npm/express/3.0.x


Bonus points
using a precommit hook!