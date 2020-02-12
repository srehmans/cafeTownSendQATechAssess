To run, you will need to have Node.js installed. You will download Protractor package using npm,
which comes with Node.js. Check the version of Node.js you have by running node --version

if node js is not installed please download it from https://nodejs.org/en/download/


npm install -g protractor (Global installation is optional)

This will install two command line tools, protractor and webdriver-manager

Try running: protractor --version 
to make sure its working correctly 

run:
webdriver-manager update 
(it will download selenium jar and browser drivers)

run:

webdriver-manager start
(to run selenium)

Some Useful commands in case of issues:

webdriver-manager update help
webdriver-manager start help
webdriver-manager clean help
webdriver-manager status help

Please make necessary changes in conf.js

to run test , run :

protractor conf.js

For webstorm protractor configuration : JPG is uploaded

Note: node_modules folder is also uploaded on google drive however its not needed. it will automatically be created 


