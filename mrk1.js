
var dic1 = {'a': 100, 'b': 200, 'c':300};
var dic2={'a': 300, 'b': 200, 'd':400}
for (let i in dic1){
  let j=i
  for ( j in dic2){
    if (!i.includes(dic2)){
      if (i==j){
        dic2[i]=dic1[i]+dic2[i]
        break
      }
      else{
        dic2[i]=dic1[i]
      }
    }
  }
}
console.log(dic2);
