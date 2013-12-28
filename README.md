flow
====

Manage async callbacks

```
flow(function (counter) {
    //Do some async operations
    [
        'Hello.txt',
        'World.txt',
    ].forEach(function (url) {
        counter.inc(); //increment counter by 1. counter was initally zero.

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(url);
                //decrement counter and send results/errors.
                //When counter hits zero, the next task will be called.
                counter.tick(null, xhr.responseText);
            }
        };
        xhr.send();
    });
    console.log('Task 1 completed.');
}, function (counter, errs, results) {
    console.log(errs);
    console.log(results);
    console.log('Task 2 completed.');
    counter.next();
}, function (counter, errs, results, repeatCount) {
    if (repeatCount < 2) {
        counter.setFlow(true); //which means when tick() reaches zero, it will repeat this task again.
    }
    //Do some async operations
    [
        'Hello.txt',
        'World.txt',
    ].forEach(function (url) {
        counter.inc(); //increment

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(url);
                counter.tick(null, xhr.responseText); //decrement and send results/errors
            }
        };
        xhr.send();
    });
    console.log('Task 3 completed.');
}, function (counter, errs, results) {
    console.log(errs);
    console.log(results);
    console.log('Task 4 completed.');
    console.log('Done');
});
```
