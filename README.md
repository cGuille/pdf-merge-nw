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

##Run an existing built

The project may have been built for your platform, check the `dist` folder:
###On Windows:
If there is a `pdf-merge.exe` file located in `dist/win`, you can just run it with a double click.
###On GNU/LINUX:
If there is a `pdf-merge` file located in `dist/linux`, you can just run it with a double click.

Not that there is no warranty for these files to be up to date. If you want to ensure that, or if the file for your platform is missing, you will have to build the project yourself (see the build section below).


##Build the project

###On Windows:
 - zip the content of the `src` folder (the **content** of the folder, **not the folder itself**);
 - rename the zip file `src.nw` (without the .zip extension, it's ok!) and put it right into the `build` folder;
 - go to the `win` folder, located in the `build` directory, and execute the batch file called `build.bat` with a double click.

###On GNU/Linux:
  - simply run the shell script `build.sh` located on build/linux. - **_caution:_ currently out of date** [TODO]

More info about building a NodeWebkit app on [the NodeWebkit wiki](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps).

Once the project has been built, you will find the executable file into the `dist` folder (report to the section "Run an existing built" above).

##TODO
 - update linux build script;
 - prompt & save the pdftk path if not available.
