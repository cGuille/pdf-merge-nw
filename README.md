#pdf-merge-nw

A pdftk GUI front-end to merge several PDF documents into a whole one.

#Try it

##Install pdftk

First you need to install pdftk (if it is not already installed). In Debian-like distributions, you can achieve this with the following command:
```
sudo apt-get install pdftk
```
Else, you can download it from [the official website](http://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/).
**Ensure that the pdftk executable is available from the PATH since pdf-merge will call the command `pdftk`.**

Then you have to download the whole repo. You can either get the [zipped version](https://github.com/cGuille/pdf-merge-nw/archive/master.zip) or clone the repo with git (`git clone https://github.com/cGuille/pdf-merge-nw.git`).

If you download the zipped version,extract it.

##Run from the source
###On Windows:
Open a terminal (`cmd.exe`), go to the project root (use `cd` to change directory) and run the following command:
```batch
bin\win\nw.exe src
```
###On GNU/Linux:
Open a terminal, go to the project root (use `cd` to change directory) and run the following commands:
- for 64 bits systems:

```sh
chmod +x bin/node-webkit-v0.4.2-linux-x64/nw
bin/node-webkit-v0.4.2-linux-x64/nw src
```
- for 32 bits systems:

```sh
chmod +x bin/node-webkit-v0.4.2-linux-ia32/nw
bin/node-webkit-v0.4.2-linux-ia32/nw src
```
###On Mac OS:
Open a terminal, go to the project root (use `cd` to change directory) and run the following command:
```sh
bin/node-webkit.app/Contents/MacOS/node-webkit src
```


##Build the project

###On Windows:
 - zip the content of the `src` folder (the **content** of the folder, **not the folder itself**);
 - rename the zip file `src.nw` (without the .zip extension, it's ok!) and put it right into the `bin` folder;
 - in the `build` directory, go to the `win` folder and execute the batch file called `build.bat` (double click the file).

###On GNU/Linux (64 bits, you may adapt the script for 32 bits systems):
 - open a terminal and go to the directory `build/linux`;
 - give the build script the permission to be executed with `chmod +x build.sh`;
 - run `./build.sh 32` or `./build.sh 64` whether you want to build the 32 or 64 bits version.

More info about building a Node-Webkit app on [the Node-Webkit wiki](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps).


##Run an existing built

Once the project has been built for your platform, check the `dist` folder:
###On Windows:
A double click on the file `pdf-merge.exe` located in `dist/win` should launch the app.
###On GNU/LINUX:
A double click on the file `pdf-merge` located in `dist/linux` should launch the app.


#TODO
 - remove a file from the list;
 - better drag & drop to move the list items;
 - prompt & save the pdftk path if not available.
