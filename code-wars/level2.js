console.log("================ CODE WARS ==============")

/* 
Define a function that takes an integer argument and returns a logical 
value true or false depending on if the integer is a prime.
Per Wikipedia, a prime number ( or a prime ) is a natural number
greater than 1 that has no positive divisors other than 1 and itself.

Looping all the way up to n, or n/2, will be too slow.
*/


function isPrime(num) {

    // check if greater than 1
    const greaterOne = num > 1 ? true : false;

    // if greater
    if (greaterOne) {

        let divisorFound = false;
        
        // loop through numbers to see if divide num by i yield a 0 remainder

        // i < num is the default but leads to time out
        // trying num / 2 – still time out
        for (let i = 2; i <= Math.sqrt(num); i++) {
            
            if (num % i === 0) {
                divisorFound = true;
                break;
            }

        }

        if (divisorFound) {
            
            // not a prime number
            return false;

        } else {

            // prime number
            return true;

        }

    } else {
        // not a prime number
        return false;
    }

}