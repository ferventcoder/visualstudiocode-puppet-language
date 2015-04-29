# Code - Puppet Language Support

To play with this, create a symlink from `vs.language.puppet` to something like `%localAppdata%\Code\app-0.1.0\resources\app\plugins\vs.language.puppet`

```sh
mklink /d vs.language.puppet C:\code\visualstudiocode-puppet-language\vs.language.puppet
```

### NOTES

 * Nothing really works, just wanted to test out how easy it would be to add language support.
 * The work that needs to be done is in `vs.language.puppet/puppetDef.js`
 * The symlink would need to be recreated each time the application updates.
 * You may need to restart Visual Studio Code every time you make changes.