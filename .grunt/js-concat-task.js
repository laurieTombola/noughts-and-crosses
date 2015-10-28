(function () {
    'use strict';
    
    module.exports = {
        concat: {
            src: ['main-app/app/scripts/modules.js',
                'main-app/app/scripts/template-cache.js',
                'main-app/app/scripts/core/**/*.js',
                'main-app/app/scripts/**/directives/**/*.js',
                'main-app/app/scripts/**/services/**/*.js',
                'main-app/app/scripts/**/controllers/**/*.js'],
            dest: '.build//main-app/app/scripts/app.js',
            expand: false
        }
    };
})();