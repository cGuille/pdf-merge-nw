:: You have to create src.nw by zipping the src folder before calling the build script
copy /b .\..\..\bin\win\nw.exe + .\..\src.nw pdf-merge.exe
move pdf-merge.exe ..\..\dist\win\pdf-merge.exe
