(function(){
    'use strict';

    module.exports={
        images: {
            src: ['.build/main-app/app/image/']
        },
        sounds: {
            src: ['.build/main-app/app/sound/']
        },
        html: {
            src: ['.build/main-app/app/**/*.html']
        },
        bower: {
            src: ['.build/main-app/app/third-party/bower_components/']
        },
        css: {
            src: ['.build/main-app/app/css/']
        },
        js: {
            src: ['.build/main-app/app/js/']
        },
        all: {
            src: ['./.build/']
        }

    };
})();