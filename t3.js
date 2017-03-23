"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var observable = Observable_1.Observable.create(function (observer) {
    var _loop_1 = function (i) {
        var id = setTimeout(function () {
            observer.next(i);
            console.log('inside setTimeout loop: ', i);
        }, 400);
    };
    for (var i = 0; i < 5; i++) {
        _loop_1(i);
    }
    //observer.complete();
});
observable.subscribe({
    next: function (x) { return console.log('got value ' + x); },
    error: function (err) { return console.error('something wrong occurred: ' + err); },
    complete: function () { return console.log('done'); },
});
//# sourceMappingURL=t3.js.map