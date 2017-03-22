"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
var observable = Observable_1.Observable.create(function (observer) {
    var _loop_1 = function (i) {
        setTimeout(function () {
            observer.next(i);
            console.log('loop: ', i);
        }, 500);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
    observer.complete();
});
console.log('just before subscribe');
observable.subscribe({
    next: function (x) { return console.log('got value ' + x); },
    error: function (err) { return console.error('something wrong occurred: ' + err); },
    complete: function () { return console.log('done'); }
});
// observable.subscribe(
//   x => console.log('got value ' + x),
//   err => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// );
console.log('just after subscribe');
