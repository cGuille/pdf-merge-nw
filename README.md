#pdf-merge-nw

A pdftk GUI front-end to merge several PDF documents into a whole one.

##Try it (tested on GNU/Linux & Windows 7)

First you need to install pdftk (if it is not already installed). In Debian-like distributions, you can achieve this with the following command:
```
sudo apt-get install pdftk
```
Else, you can download it from [the official website](http://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/).
**Ensure that the pdftk executable is available from the PATH since pdf-merge will call the command `pdftk`.**

Then you have to download the whole repo. You can either get the [zipped version](https://github.com/cGuille/pdf-merge-nw/archive/master.zip) or clone the repo with git (`git clone https://github.com/cGuille/pdf-merge-nw.git`).

If you download the zipped version,extract it.


##Build the project

###On Windows:
 - zip the content of the `src` folder (the **content** of the folder, **not the folder itself**);
 - rename the zip file `src.nw` (without the .zip extension, it's ok!) and put it right into the `bin` folder;
 - in the `build` directory, go to the `win` folder and execute the batch file called `build.bat` (double click the file).

###On GNU/Linux:
  - simply run the shell script `build.sh` located on build/linux. - **_caution:_ currently out of date** [TODO]

More info about building a NodeWebkit app on [the NodeWebkit wiki](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps).


##Run an existing built

Once the project has been built for your platform, check the `dist` folder:
###On Windows:
A double click on the file `pdf-merge.exe` located in `dist/win` should launch the app.
###On GNU/LINUX:
A double click on the file `pdf-merge` located in `dist/linux` should launch the app.


##TODO
 - update linux build script;
 - prompt & save the pdftk path if not available.
