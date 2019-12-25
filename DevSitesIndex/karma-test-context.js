

// 12/13/2019 12:06 pm - SSN - [20191213-1145] - [004] - Adding Karma Jasmine testing for AngularJS
https://zirho.github.io/2016/06/06/karma-es6/

// File listed as test-context.js


//require('./wwwroot/lib/Angular_1_7/angular');
//require('./wwwroot/lib/Angular_1_7/angular-mocks');

//var context0 = require.context('./wwwroot/lib/Angular_1_7', true, /\.js$/);
//context0.keys().forEach(context0);

require("babel-polyfill");

function importAll(r) {
    r.keys().forEach(function (file) {
        if (!file.match('d.ts$')) {
            //r(file);
        }
    });
}


//var context1 = require.context('./wwwroot/js/', true, /((?!\.d\.ts)|(\.js))$/);
//var context1 = require.context('./wwwroot/js/', true, /((?!\.d\.ts)|(\.ts))$/);




//var context1 = require.context('./wwwroot/js/', true, /Timesheet.*\w\w\.ts$/);
//context1.keys().forEach(context1 );

var context1b = require.context('./wwwroot/js/', true, /Timesheet_Test\.js$/);
context1b.keys().forEach(context1b);


//importAll ( require.context('./wwwroot/js/', true, /timesheet.*\.ts$/));


//importAll(context1);


//var context2 = require.context('./wwwroot/jstest/', true, /spec\.js$/);
var context2 = require.context('./wwwroot/jstest/', true, /\.js$/);
context2.keys().forEach(context2);


