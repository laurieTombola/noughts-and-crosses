(function () {
    'use strict';
    module.exports = {
        concat: {
            src: ['main-app/app/js/*.js','main-app/app/js/directives/**/*.js', 'main-app/app/js/services/**/*.js', 'main-app/app/js/controllers/**/*.js'],
            dest: '.build//main-app/app/js/app.js',
            expand: false
        }
    };
})();