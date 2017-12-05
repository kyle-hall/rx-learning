
const Rx = require('rxjs/Rx');

const observable = Rx.Observable.of(1);

const observer = {
    next: x => console.log("got value:",x),
    error: err => console.log("Error:", err),
    complete: () => console.log("All done\n-------------------------------------------")
};

observable.subscribe(observer);

// Now, for examples with arrays

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayObservable = Rx.Observable.from(myArray);

const squaresObservable = arrayObservable.delay(200)
    .map(x => x * x);

const evensObservable = arrayObservable.take(5)
    .filter(x => x % 2 === 0);

squaresObservable.subscribe(observer);

evensObservable.subscribe(observer);
