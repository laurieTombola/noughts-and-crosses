(function(){
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessLintTask = require('./.grunt/less-lint-task'),
        lessTask = require('./.grunt/less-task'),
        jsLintTask = require('./.grunt/js-lint-task'),
        concatTask = require('./.grunt/js-concat-task'),
        cleanTask = require('./.grunt/clean-task');

    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessLintTask,
            less: lessTask,
            jshint: jsLintTask,
            concat: concatTask,
            clean: cleanTask
        });

        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');

        grunt.loadNpmTasks('grunt-lesslint');

        grunt.registerTask('lesser', ['lesslint', 'less']);
        grunt.registerTask('default', ['copy']);
    }
})();