function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }




  function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
  }


  function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }


  function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }