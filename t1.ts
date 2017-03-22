import { Observable } from 'rxjs/Observable';
var observable = Observable.create(function (observer) {
    for (let i=0; i<5; i++) {
      setTimeout (() => {
          observer.next(i);
          console.log('loop: ', i);
      }, 500);
    }
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