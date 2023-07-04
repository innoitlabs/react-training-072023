// new Promise((resolve, reject) => {
//     console.log("initial Statement");
//     resolve();
// }).then(() => { // 1
//     throw new Error("Something Failed");     
//     console.log("do things");
// }
// ).catch(() => { //
//     console.log("catch statement");
// }).then(() => { 
//     console.log("DO this finally");
// }).then(() => { console.log("DO this finally 2"); });

//execute methods sequentially
// function doSomething() { 
//     console.log("doSomething method");
//     return "doSomething method";
// }

// doSomething()
//     .then((result) => { console.log("doSomething method next then method 1"); })
//     .then((result1) => { console.log("doSomething method next then method 2"); });

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

function func1() {
    return "function1 result";
}

function func2() {
    return "function2 result";
}

function func3() {
    return "function3 result";
}

// Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
//   // use result1, result2 and result3
//     console.log(result1);
//     console.log(result2);
//     console.log(result3);
// });

async function allFunctions() { 
    try {
        const f1 = await func1();
        console.log(f1);
        const f2 = await func2();
        console.log(f2);
        const f3 = await func3();
        console.log(f3);
    }
    catch (error) { 
        console.log(error.message);
    }
}

allFunctions();