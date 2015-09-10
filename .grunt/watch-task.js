(function () {
    'use strict';
    module.exports = {
        less: {
            files: './main-app/app/less/**/*.less',
            tasks: ['lesser']
        },
        mainappimages: {
            files: ['main-app/app/image/**/*.*'],
            tasks: ['copy:mainappimages']
        },
        mainappsounds: {
            files: ['main-app/app/sound/**/*.*'],
            tasks: ['copy:mainappsounds']
        },
        html: {
            files: ['main-app/app/*.html'],
            tasks: ['copy:html']
        },
        bower: {
            files: ['bower_components/**/*.*'],
            tasks: ['copy:bower']
        },
        js: {
            files: ['main-app/app/js/**/*.js'],
            tasks: ['copyJS']
        }
    };
})();