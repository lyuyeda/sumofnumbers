function sumFor(list) {
  let ret = 0;
  for(let i = 0; i < list.length; i++){
    ret += list[i];
  }
  return ret;
}
function sumWhile(list) {
  let ret = 0;
  while(list.length > 0){
    ret += list.pop();
  }
  return ret;
}
function sumRecursion(list,ret) {
  if(list.length == 0){
    return 0;
  }
  let temp = list.pop();
  return temp + sumRecursion(list, ret);
}
function sumTheSimpleWay(list) {
  return _.reduce(list,function (memo, item) {
    return memo + item;
  },0);
}