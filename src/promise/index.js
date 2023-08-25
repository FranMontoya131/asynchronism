const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
}

somethingWillHappen()
    .then((response) => console.log("somethingWillHappen Reponse: ", response))
    .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whooops!'); //<--- Esto nos permite debuggear mejor, ya que nos muestra mas informacion sobre el error
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then((response) => console.log("somethingWillHappen2 Reponse: ", response))
    .catch((error) => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of responses: ", response);
    })
    .catch(error => {
        console.error(error);
    });