module.exports = function check(s, bracketsConfig) {
  let stak = [];
 let brackets={
    ')':'(',
    '}':'{',
    ']':'[',
  };

 for(let i = 0; i < s.length; i++) {
   const current = s[i];
  if(isClosedBracket(current)){

    if (brackets[current] !== stak.pop()) return false;
  }else{
    stak.push(current)
  }
 }
return stak.length === 0; 
}


function isClosedBracket(ch){
  return [')', '}', ']'].indexOf(ch) > -1;
}
/*function isValid(s){
let stak = [];
 let brackets={
    ')':'(',
    '}':'{',
    ']':'[',
  };

 for(let i = 0; i < s.length; i++) {
   const current = s[i];
  if(isClosedBracket(current)){

    if (brackets[current] !== stak.pop()) return false;
  }else{
    stak.push(current)
  }
 }
return stak.length === 0; 
}


function isClosedBracket(ch){
  return [')', '}', ']'].indexOf(ch) > -1;
}*/