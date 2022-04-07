var list1=["one","two","three","four","five"];
var list2=[1,2,3,4,5,];
let dict={}
for (let i in list1){
    dict[list1[i]]=list2[i]
}
console.log(dict)