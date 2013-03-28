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
            var div = document.createElement('div');
            div.classList.add('file');
            div.setAttribute('draggable', 'true');
            div.setAttribute('data-path', file.path);
            div.setAttribute('data-name', file.name);
            div.addEventListener('dragstart', onFileDragStart);
            div.addEventListener('dragenter', onFileDragEnter);
            div.addEventListener('dragleave', onFileDragLeave);
            div.addEventListener('dragend', onFileDragEnd);
            div.addEventListener('drop', onFileDrop);
            div.appendChild(document.createTextNode(file.name));
            dropzone.appendChild(div);
        }

        var dragSrcElt = null;
        function onFileDragStart() {
            dragSrcElt = this;
            this.classList.add('dragging');
        }
        function onFileDragEnter(evt) {
            this.classList.add('flown-over');
        }
        function onFileDragLeave() {
            this.classList.remove('flown-over');
        }
        function onFileDragEnd() {
            this.classList.remove('dragging');
        }
        function onFileDrop() {
            this.classList.remove('flown-over');
            dropzone.insertBefore(dragSrcElt, this.nextSibling);
            dragSrcElt = null;
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
            console.info('merged ' + inputFiles.length + 'files into ' + outputFile);
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
