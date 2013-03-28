(function () {
    'use strict';

    checkPdftk();

    document.addEventListener('DOMContentLoaded', run);

    function run() {
    var dropzone = document.getElementById('drop-zone'),
        outputFileNameInput = document.getElementById('output-filename');

        function stopEvent(evt) {
            evt.stopPropagation();
            evt.preventDefault();
        }

        ['dragenter', 'dragexit', 'dragover', 'drop'].forEach(function (eventName) {
            dropzone.addEventListener(eventName, stopEvent);
        });

        dropzone.addEventListener('drop', function onFileDropped(evt) {
            var files = evt.dataTransfer.files,
                nbFiles = files.length,
                i;

            for (i = 0; i < nbFiles; ++i) {
                var file = files[i];

                if (file.type === 'application/pdf') {
                    addFile(file);
                }
            }

            if (dropzone.getElementsByClassName('file').length >= 2) {
                dropzone.classList.remove('error');
            }
        });

        function addFile(file) {
            if (dropzone.getElementsByClassName('info').length) {
                dropzone.innerHTML = '';
            }
            var div = document.createElement('div'),
                labelElt = document.createElement('span'),
                moveUpBtn = document.createElement('button'),
                moveDownBtn = document.createElement('button');

            div.classList.add('file');
            div.setAttribute('data-path', file.path);
            div.setAttribute('data-name', file.name);

            moveUpBtn.classList.add('move');
            moveUpBtn.setAttribute('data-type', 'up');
            moveUpBtn.addEventListener('click', moveFile);
            moveUpBtn.appendChild(document.createTextNode('↑'));
            div.appendChild(moveUpBtn);

            moveDownBtn.classList.add('move');
            moveDownBtn.setAttribute('data-type', 'down');
            moveDownBtn.addEventListener('click', moveFile);
            moveDownBtn.appendChild(document.createTextNode('↓'));
            div.appendChild(moveDownBtn);

            labelElt.classList.add('label');
            labelElt.appendChild(document.createTextNode(file.name));
            div.appendChild(labelElt);

            dropzone.appendChild(div);
        }
/* // Debugging purpose:
        for (var i = 1; i <= 5; ++i) {
            addFile({
                type: 'application/pdf',
                name: i + '.pdf',
                path: 'D:\\Documents\\JavaScript\\pdf-merge-nw\\' + i + '.pdf',
            });
        }
*/
        function moveFile(evt) {
            var type = evt.srcElement.getAttribute('data-type'),
                fileElt = evt.srcElement.parentNode;

            // console.log('move ' + type + ' on', fileElt);
            if (type === 'up') {
                if (fileElt.previousSibling) {
                    dropzone.insertBefore(fileElt, fileElt.previousSibling);
                }
            } else if (type === 'down') {
                if (fileElt.nextSibling) {
                    dropzone.insertBefore(fileElt, fileElt.nextSibling.nextSibling);
                }
            } else {
                throw new Error('cannot move: invalid type `' + type + '`')
            }
        }

        document.getElementById('merge-btn').addEventListener('click', function () {
            var fileElts = dropzone.getElementsByClassName('file'),
                outputFileName = outputFileNameInput.value,
                inputPaths = [],
                outputFilePath;

            if (fileElts.length < 2) {
                dropzone.classList.add('error');
            }

            if (!outputFileName) {
                outputFileNameInput.classList.add('error');
                outputFileNameInput.addEventListener('keyup', function () {
                    if (outputFileNameInput) {
                        outputFileNameInput.classList.remove('error');
                    }
                });
                return;
            }

            for (var i = 0; i < fileElts.length; ++i) {
                var fileElt = fileElts[i];
                inputPaths.push(fileElt.getAttribute('data-path'));
            }

            if (outputFileName.substr(-4) !== '.pdf') {
                outputFileName += '.pdf';
            }

            outputFilePath = require('path').dirname(inputPaths[0]) + '/' + outputFileName;

            merge(inputPaths, outputFilePath);
            window.close();
        });
    }

    function merge(inputFiles, outputFile) {
        var command = 'pdftk ',
            operand = 'cat output ';

        command += inputFiles.join(' ') + ' ';
        command += operand;
        command += outputFile;

        
        require('child_process').exec(command, function (error, stdout, stderr) {
            if (error) {
                throw error;
            }
            console.log('merged ' + inputFiles.length + 'files into ' + outputFile);
        });
    }

    function checkPdftk() {
        require('child_process').exec('pdftk --help', function (error, stdout, stderr) {
            if (error) {
                console.error('Error: check if pdftk is available.');
                throw error;
            }
        });
    }
}());
