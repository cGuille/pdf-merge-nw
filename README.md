pdf-merge-nw
============

A tool to merge several PDF documents into a whole one. Use pdftk so it MUST be installed.

Try it (GNU/Linux)
==================

Install pdftk. In Debian-like distributions, you can achieve this with the following command:
```
sudo apt-get install pdftk
```

Download the whole repo and build pdf-merge:
```
git clone https://github.com/cGuille/pdf-merge-nw.git &&
cd pdf-merge-nw &&
chmod +x build
./build
```

You can then launch the app, either with the CLI (`./pdf-merge`) or with your GUI by launching the executable file `pdf-merge`).

TODO
====
 - move up/down the selected filed;
 - prompt & save the pdftk path if not available;
 - packaging (?).


Screenshots
===========
Here are a few screenshots of the app (on GNU/Linux with KDE 4):
![Dropping PDF files](http://publisher.guillaumecharmetant.com/pdf-merge-screenshots/pdfmerge-s1.png)
![Files has been dropped, ready to merge](http://publisher.guillaumecharmetant.com/pdf-merge-screenshots/pdfmerge-s2.png)
![Merge button clicked, back to the file browser](http://publisher.guillaumecharmetant.com/pdf-merge-screenshots/pdfmerge-s3.png)
