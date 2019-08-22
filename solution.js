function persistence(num) {
    
    let i = 0
    
    function multiplyDigits(num){
    
      let arr = num.toString().split('')
   
      let multiply = arr.reduce((acc, currentVal) => acc * currentVal)
      
       if (num > 9) {
         i++
         multiplyDigits(multiply)
      }
    }
    
  if (num < 10) {
    return i
  }
  else {
    multiplyDigits(num)
  }
    
  return i
    
}
