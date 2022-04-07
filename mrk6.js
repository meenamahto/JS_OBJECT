var my_dict = {
    'data1':100,
    'data2': -54,
    'data3': 247
   }
var sum=0;
for(let i in my_dict){
    sum+=my_dict[i]
}   
console.log(sum)