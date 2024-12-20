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

// Extract the domain name from a URL
function domainName(url){

    let arrayWww = url.split('www.')
    let string;
    
    if (arrayWww.length === 1) {
      string = url
    } else {
      string = arrayWww[1]
    }
  
    let arraySlash = string.split('//');
    
    if (arraySlash.length !== 1) {
      string = arraySlash[1]
    } 
    
    let arrayDot = string.split('.');
    
    if (arrayDot.length !== 1) {
      string = arrayDot[0]
    }
    
    return string;
    
}

function validBraces(braces){
  
  const paren = ['(', ')']
  const boxy = ['[', ']']
  const curly = ['{', '}']
  
  let open = []
  let close = []
  
  // populate open and close arrays
  braces.split('').forEach(brace => {
    if (brace === paren[0] || brace === boxy[0] || brace === curly[0]) {
      open.push(brace)
      close.push('x')
    } else {
      close.push(brace)
      open.push('x')
    }
  })
  
  // check if closing braces precede opening braces
  let countOpen = 0
  let countClose = 0
  for (let i = 0; i < open.length; i++) {
    if (open[i] === 'x') countOpen++;
    if (close[i] === 'x') countClose++;
    if (countOpen > countClose) return false;
  }
  
  // split into chunks separated by 'x'
  let openSplit = open.join('').split('x').filter(str => str != '')
  let closeSplit = close.join('').split('x').filter(str => str != '')
  
  // is length of opening and closing the same?
  if (openSplit.length != closeSplit.length) return false;
  
  // reverse open array
  let openReverse = openSplit.map(str => str.split('').reverse().join(''))
  
  // replace characters in close array
  let closeReplaced = closeSplit.map(str => {
    
    let newStr = str.split('').map(char => {
      let newChar;
      if (paren.includes(char)) newChar = paren[0]
      if (boxy.includes(char)) newChar = boxy[0]
      if (curly.includes(char)) newChar = curly[0]
      return newChar
    }).join('')
    
    return newStr;
    
  })
  
  // compare reversed open array and replaced close array
  for (let i = 0; i < openReverse.length; i++) {
    if (openReverse[i] != closeReplaced[i]) return false;
  }
  
  // if all checks pass, true
  return true;
  
}