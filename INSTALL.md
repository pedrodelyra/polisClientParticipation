This instructions assume you are running a Debian based distro.

In first place, we need to install nvm, you can find the instructions to install it on its repository https://github.com/creationix/nvm

After nvm's installation, we need to install npm and nodejs.

  $ sudo apt-get install npm nodejs

Now, we need to install a specific version of nodejs, used on polisClientParticipation:

  $ nvm install v0.12.7

Now, make sure you're using the correct version of node with:

  $ nvm list

You can select the correct version (if it's not selected yet) with the following command:

  $ nvm use v0.12.7

Now, we need to install some dependences.

  $ npm install

We need to install another package manager to install a few more dependences

  $ npm install -g bower

Run the following command to install the remaining dependences.

  $ bower install

You can now execute the app with the following command

  $ ./x
