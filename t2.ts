import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const o$ = Observable.interval(400).take(5)
    .map(i=>['1','abc','3','xyz','5'][i]);

const o2$ = o$
    .map(x=>parseInt(x))
    .filter(x=>!isNaN(x));

o2$.subscribe({
    next: v => {console.log(parseInt(v))},
    error: error => {console.error(error)},
    complete: () => console.log('completed')
})    