(function(){
    'use strict';

    module.exports={
        unit: {
            configFile: 'karma.conf.js',

            options: {
                files: ['bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'main-app/app/scripts/modules.js',
                    'main-app/app/scripts/**/services/**/*.js',
                    'main-app/app/scripts/**/directives/*.js',
                    'main-app/app/scripts/**/controllers/*.js',
                    'main-app/app/scripts/core/*.js',
                    'main-app/mocks/**/*.js',
                    'main-app/tests/*.test.js']
            }
        }
    };
})();