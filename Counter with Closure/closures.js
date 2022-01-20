

function counter() {
    let counter = 0;
    
    return {
        increment() {
            return counter += 1;
        },
        decrement() {
            return counter -= 1;
        },
        printCount() {
            console.log('Count: '+counter);
        }
    }
}

let count = counter();
count.increment();
count.increment();

count.printCount();

count.decrement();

count.printCount();
