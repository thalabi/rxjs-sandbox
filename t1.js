"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var observable = Observable_1.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
});
console.log('just before subscribe');
observable.subscribe({
    next: function (x) { return console.log('got value ' + x); },
    error: function (err) { return console.error('something wrong occurred: ' + err); },
    complete: function () { return console.log('done'); },
});
// observable.subscribe(
//   x => console.log('got value ' + x),
//   err => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// );
console.log('just after subscribe');
//# sourceMappingURL=t1.js.map