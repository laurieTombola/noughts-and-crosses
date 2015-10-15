(function(){
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessLintTask = require('./.grunt/less-lint-task'),
        lessTask = require('./.grunt/less-task'),
        jsLintTask = require('./.grunt/js-lint-task'),
        concatTask = require('./.grunt/js-concat-task'),
        cleanTask = require('./.grunt/clean-task'),
        watcher = require('./.grunt/watch-task'),
        karmaTask = require('./.grunt/karma-task');

    module.exports = function(grunt){
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessLintTask,
            less: lessTask,
            jshint: jsLintTask,
            concat: concatTask,
            clean: cleanTask,
            watch: watcher,
            karma: karmaTask
        });

        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-karma');


        grunt.loadNpmTasks('grunt-lesslint');

        grunt.registerTask('karmoo', ['karma']);
        grunt.registerTask('lesser', ['lesslint', 'clean:css', 'less']);
        grunt.registerTask('copyFiles', ['clean:bower', 'clean:images', 'clean:sounds', 'clean:html', 'copy']);
        grunt.registerTask('copyJS', ['jshint', 'clean:js', 'concat']);
        grunt.registerTask('default', ['lesser','karmoo', 'copyFiles', 'copyJS', 'watch']);
    }
})();