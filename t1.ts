import { Observable } from 'rxjs/Observable';
var observable = Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
});

console.log('just before subscribe');
observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
// observable.subscribe(
//   x => console.log('got value ' + x),
//   err => console.error('something wrong occurred: ' + err),
//   () => console.log('done')
// );
console.log('just after subscribe');