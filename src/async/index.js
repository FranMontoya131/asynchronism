const doSomethingAsync = () => {
	return new Promise((resolve) => {
		(true)
			? setTimeout(() => resolve('Do something async'), 3000)
			: reject(new Error('Test error'))
	})
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
	try {
		const something = await doSomethingAsync();
		console.log('something :>> ', something);
	} catch (error) {
		console.log('error :>> ', error);
	}
}

console.log('Before 1');
anotherFunction();
console.log('After 1');