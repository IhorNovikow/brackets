module.exports = function check(str, bracketsConfig) {
  if ( str.length % 2 != 0 ) {
  return false;
  }
  else {
  while ( str.indexOf('()', 0)>=0 || str.indexOf('{}', 0)>=0 || str.indexOf('[]', 0)>=0 || str.indexOf('||', 0)>=0 ) {
  str = str.replace('()', '').replace('[]', '').replace('{}', '').replace('||', '');
  }
  if ( str.length == 0 ){
  return true;
  }
  else {
  while ( str.indexOf('12', 0)>=0 || str.indexOf('34', 0)>=0 || str.indexOf('56', 0)>=0 || str.indexOf('77', 0)>=0 || str.indexOf('88', 0)>=0 ) {
  str = str.replace('12', '').replace('34', '').replace('56', '').replace('77', '').replace('88', '');
  }
  if ( str.length == 0 ){
  return true;
  }
  else {
  return false;
  }
  }
  }
  
  }