`use strict`;

exports.provideBuilder = function () {
    return {
        constructor: function (cwd) {
            this.cwd = cwd;
        },

        getNiceName: function () {
            return "1C (BSL)";
        },

        isEligable: function (cwd) {
            console.log(cwd);
            console.log("все хорошо");
            return true;
            var textEditor = atom.workspace.getActiveTextEditor();
            if (!textEditor || !textEditor.getPath()) {
                console.log("ошибка 1");
                return false;
            };
            var path = textEditor.getPath();
            console.log(path);
            return path.endsWith(".os") || path.endsWith(".bsl");
        },

        settings: function (cwd) {

            return [
                {
                    name: "OneScript: run",
                    sh: false,
                    exec: "oscript",
                    args: [ "-encoding=utf-8", "{FILE_ACTIVE}" ],
                    errorMatch: [
                        "^\\{Модуль (?<file>.+) / Ошибка в строке: (?<line>[0-9]+) / (?<message>.*)\\}$"
                    ]
                },
                {
                    name: "OneScript: compile",
                    sh: false,
                    exec: "oscript",
                    args: [ "-encoding=utf-8", "-compile", "{FILE_ACTIVE}" ]
                },
                {
                    name: "OneScript: make",
                    sh: false,
                    exec: "oscript",
                    args: [ "-encoding=utf-8", "-make", "{FILE_ACTIVE}" ]
                }
            ];
        }
    }
};
