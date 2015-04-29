# Code - Puppet Language Support

To play with this, create a symlink from `vs.language.puppet` to something like `%localAppdata%\Code\app-0.1.0\resources\app\plugins\vs.language.puppet`

```sh
mklink /d vs.language.puppet C:\code\visualstudiocode-puppet-language\vs.language.puppet

``` 
On OSX, crack open the `Visual Studio Code.app` folder (right click, show package contents) and navigate to `Contents/Resources/app/plugins` and copy the `vs.language.puppet` folder in (you can try symlinking it if you want).

Changing the language in code is as simple as `Ctrl+P` (`Cmd+P`), start typing `Change Language Mode`, hit enter, start typing `Puppet`, hit enter.

![Puppet Code](http://i.imgur.com/rtuBL1B.png)

### NOTES

 * Nothing really works, just wanted to test out how easy it would be to add language support.
 * The work that needs to be done is in `vs.language.puppet/puppetDef.js`
 * The symlink would need to be recreated each time the application updates.
 * You may need to restart Visual Studio Code every time you make changes.
