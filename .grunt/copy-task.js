(function(){
    'use strict';

    module.exports={
        mainappimages: {
            cwd: '',
            src: ['main-app/app/image/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainappsounds: {
            cwd: '',
            src: ['main-app/app/sound/**/*.*'],
            dest: '.build/',
            expand: true
        },
        html: {
            cwd: '',
            src: ['main-app/app/*.html', 'main-app/app/html/**/*.html'],
            dest: '.build/',
            expand: true
        },
        bower: {
            cwd: 'bower_components',
            src: ['**/*.*'],
            dest: '.build/main-app/app/third-party/',
            expand: true
        },
        karmapartials: {
            cwd: './main-app/app',
            src: ['html/**/*.html'],
            dest: './main-app/tests/',
            expand: true
        }
    };
})();