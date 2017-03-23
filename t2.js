"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/take");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
var o$ = Observable_1.Observable.interval(400).take(5)
    .map(function (i) { return ['1', 'abc', '3', 'xyz', '5'][i]; });
var o2$ = o$
    .map(function (x) { return parseInt(x); })
    .filter(function (x) { return !isNaN(x); });
o2$.subscribe({
    next: function (v) { console.log(parseInt(v)); },
    error: function (error) { console.error(error); },
    complete: function () { return console.log('completed'); }
});
//# sourceMappingURL=t2.js.map