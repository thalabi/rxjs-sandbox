import { Observable } from 'rxjs/Observable';
var observable = Observable.create( (observer) => {
    for (let i=0; i<5; i++) {
      const id = setTimeout (() => {
          observer.next(i);
          console.log('inside setTimeout loop: ', i);
      }, 400);
    }
    //observer.complete();
});

observable.subscribe({
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});
