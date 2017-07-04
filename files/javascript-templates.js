(function () {
    var templates = {
        "name": "javascript",
        "context": "javascript",
        "templates": [{
            "name": "null",
            "description": "null",
            "template": "null"
        }, {
            "name": "true",
            "description": "true",
            "template": "true"
        }, {
            "name": "false",
            "description": "false",
            "template": "false"
        }]
    };
    CodeMirror3.templatesHint.addTemplates(templates);
})();