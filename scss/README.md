VisaPlace StyleSheet

This gulp project is used to assemble the stylesheet for www.visaplace.com under its preexisting WordPress implementation. This is done by taking the old css stylesheet it was using at the time this project began and injecting it into a sass project so it can be overwritten strategically. Refer to 'gulpfile.js' for stream functions and how to use them.

Installation Instructions

Note: These instructions were written on January 11, 2017. If reinstalling frameworks, check relevant sources online for updated versions if desired.

Dependencies

1. Homebrew (not required but recommended to install node)
http://brew.sh/

  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Recommended to also run these:

  brew update
  brew doctor
  export PATH="/usr/local/bin:$PATH"

2. Node (for NPM)
Node is the package manager Gulp and its dependencies are built in, and is required for it and to install new packages.

With Homebrew:

  brew install node

Alone:

https://nodejs.org/en/download/

3. Gulp
Gulp is used for the actual task management of this project, through 'gulpfile.js' and is required to execute the tasks there through the 'gulp' prefix.

  npm install -g gulp

4. Bower
Bower is another package manager required to fetch a couple of dependencies unique to it. When adding new dependencies to this project, I use NPM if a given dependency is available for both and Bower only when required or a given dependency's NPM version is behaving unexpectedly.

Bower is NOT required to use gulp after the project is built. If the  and 'bower_components' directory is present then it doesn't need to be installed globally, it's only needed to rebuild this directory with the accompanying JSON file (see below)

  npm install -g bower

4. Rebuild Project

If the project directory is lacking its 'node_modules' and 'bower_components' directories, you can rebuild these using the 'package.json' and 'bower.json' files by running the following commands from the project directory:

  npm install
  bower install

These folders contain the project dependencies - nothing is being stored elsewhere and linked in. gulpfile.js creates the tasks for this project and all other files are the actual project files to work on.
