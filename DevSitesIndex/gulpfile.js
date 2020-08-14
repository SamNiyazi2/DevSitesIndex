// 12/13/2019 11:46 am - SSN - [20191213-1145] - [001] - Adding Karma Jasmine testing for AngularJS

// https://blogs.msdn.microsoft.com/wushuai/2017/10/29/javascript-unit-test-intergration-in-vsts-build-pipeline/


var gulp = require('gulp');
var Server = require('karma').Server;
gulp.task('unittest', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

