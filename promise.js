//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
/*
    In the old days, doing several asynchronous operations in a row would lead to 
    the classic callback pyramid of doom.
    doSomething(function(result) {
        doSomethingElse(result, function(newResult) {
            doThirdThing(newResult, function(finalResult) {
                console.log('Got the final result: ' + finalResult);
            }, failureCallback);
        }, failureCallback);
    }, failureCallback);

    With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain.
    doSomething().then(function(result) {
        return doSomethingElse(result);
    }).then(function(newResult) {
        return doThirdThing(newResult);
    }).then(function(finalResult) {
        console.log('Got the final result: ' + finalResult);
    }).catch(failureCallback);

    doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    }).catch(failureCallback);

    Important: Always return results, 
    otherwise callbacks won't catch the result of a previous promise (with arrow functions () => x is short for () => { return x; }).
*/

const userLeft = false;
const userWatchingMeme = false;

function watchYoutube(){
    return new Promise((resolve, reject) => {
        console.log("Checking user Activity!");
        if(userLeft){
            reject({
                name: "Username",
                message: "User left!"
            });
        } else if(userWatchingMeme){
            reject({
                name: "Username",
                message: "User is watching a meme!"
            });
        } else{
            resolve("User is watching YouTube!");
        }
    })
}

watchYoutube().then((message) => {
    console.log("Bravo! " + message);
}).catch((error) => {
    console.log("Oops! " + error.message);
});

//Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.