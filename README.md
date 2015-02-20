flow.js
=======

Manage async callbacks.

Aim of this library it to improve readability of async calls by "linearizing" async calls,
so that one can read async code from top-to-bottom without losing track of the flow of execution.

Why not use async library?
Because it has too much API, and many of them, IMO, are redundant and not helping much in readability.
The one that I do like is async.seq() and this library is like async.seq() with few more features.

### Basic API

`flow(func1, func2, func3, ...[, scope])();` where each function gets ` errors, results, fl` as arguments.

##### Basic example

```javascript
flow(function (fl) { //Task 1 - Simple example. No async stuff here
    console.log('Executing Task 1.');

    fl.next(null, 'Task 1 result'); //Call fl.next() to execute next task.
}, function (fl, errs, results) { //Task 2 - Managing two parallel async calls
    console.log('Task 1 completed.');
    console.log(errs);
    console.log(results);

    //Do two async stuff in parallel.
    //The number 2 is for flowjs to know that once 2 callbacks are called
    //it needs to proceed to next task.
    fl.parallel(2, function (callback, i) {
        setTimeout(function () {
            callback(null, 'Async ' + (i + 1) + ' result');
            //Once both setTimeouts complete and calls the above callback,
            //the next task is called.
        }, Math.random() * 100);
    }, this);
}, function (fl, errs, results) { //Task 3
    console.log('Task 2 completed.');
    console.log(errs);
    console.log(results);
    console.log('Done.');

    //No more tasks so no need to call fl.next().
}
/*Any number of functions (tasks) can be added here.*/)();
```

Output:
```
Executing Task 1.
Task 1 completed.
null
["Task 1 result"]
Task 2 completed.
null
["Async 1 result", "Async 2 result"]
Done.
```

##### How the example works:

Step 1:
You are given a fl object that has an internal counter and should be used to set the number of parallel async resources/callbacks that needs to be managed (which is two, in Task 2 above).

Step 2:
Pass the results/errors through callback once the async function returns so that the next task in the list gets them as it's input.
This call also decrements the internal counter. And once the counter hits zero, flow.js automatically executes the next task in the list (which is "Task 3" in the example above).

Step 3:
In "Task 3", the results and errors which we got from the previous task is displayed.

##### Documentation

[API Documentation](http://munawwar.github.io/flowjs/doc/)

#### Advanced examples

##### Repeating tasks.

```javascript
flow(function (fl) {
    var repeat = (fl.repeatCount < 2);
    //Do some parallel async operations and repeat this task two times.
    fl.parallel({
        count: 2,
        repeat: repeat
    }, function (callback, i) {
        setTimeout(function () {
            callback(null, 'Async ' + (i + 1) + ' result');
        }, Math.random() * 100);
    }, this);
}, function (fl, errs, results) {
    console.log(errs);
    console.log(results);
    console.log('Done.');
})();
```

##### Reusing tasks

I've come across a circumstance where I needed to split a task list into two so that one of them can be called again later.

```javascript
var taskList1 = flow(...);

flow(function (fl) {
    fl.next(null, 'Results to pass to taskList1');
},
taskList1,
function (fl, err, results) {
    console.log(results); //results from last callback of taskList1
})();

//You may execute taskList1() any number of times.
$('button').on('click', function () {
    taskList1();
});
```
