function checkAge(age) {
        return (age > 18) ? true : confirm ('Родители разрешили?');
    }
    
    function checkAge(age) {
        return (age > 18) || confirm ('Родители разрешили?');
    }
    
    function min(a, b) {
        return (a > b) ? b: a;
    }
    
    function min(a, b) {
        if (a < b) {
          return a;
        } else {
          return b;
        }
      }
    
    
    function pow(x, n) {
        let result = x;
      
        for (let i = 1; i < n; i++) {
          result *= x;
        }
      
        return result;
      }
    
    let x = prompt("x?", '');
    let n = prompt("n?", '');
    