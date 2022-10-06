// This is a function that returns a resolved promise. The function will resolve with a message after 500ms.
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'Resolve success!!'});
        }, 500);
    });
};

// This is a function that returns a rejected promise. The function will reject with an error after 500ms.
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'Reject promise!'});
        }, 500);
    });
};

// This is a function that handles a successful promise. It will take the response from the promise and log it to the console.
const handleSuccess = res => {
    console.log(res);
};

// This is a function that handles a rejected promise. It will take the error from the promise and log it to the console.
const handleError = err => {
    console.log(err);
};

// This is a call to the resolvedPromise function.
// If the promise is successful, it will call the handleSuccess function.
// If the promise is rejected, it will call the handleError function.
resolvedPromise()
    .then(handleSuccess)
    .catch(handleError);


// This is a call to the rejectedPromise function.
// If the promise is successful, it will call the handleSuccess function.
// If the promise is rejected, it will call the handleError function.
rejectedPromise()
    .then(handleSuccess)
    .catch(handleError);