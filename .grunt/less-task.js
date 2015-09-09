(function () {
    'use strict';

    module.exports={
        development: {
            options: {
                paths: ['main-app/app/less/']
            },
            files: {
                '.build/main-app/app/css/main.css':'main-app/app/less/main.less'
            }
        }
    };
})();