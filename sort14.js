// // In ascending order:-

var dic={"b": 2, "d": 4, "e": 3, "c": 1, "a": 0};
var list=[];
for (let i in dic){
    list.push(dic[i])
}
// console.log(list)
for (let i=0;i<list.length;i++){
    for(let j=0;j<list.length-1;j++){
        if(list[j]>list[j+1]){
            tem=list[j]
            list[j]=list[j+1]
            list[j+1]=tem
        }
    }
}
// console.log(list)
var dic_1={}
for (i in list){
    for (j in dic){
        if(list[i]==dic[j]){
            dic_1[j]=dic[j]
        }
    }
}
console.log(dic_1)


// // In descending order:-

var  dic={"b": 2, "d": 4, "e": 3, "c": 1, "a": 0};
var list=[];
for (let i in dic){
    list.push(dic[i])
}
// console.log(list)
for (let i=0;i<list.length;i++){
    for(let j=0;j<list.length-1;j++){
        if(list[j]<list[j+1]){
            tem=list[j]
            list[j]=list[j+1]
            list[j+1]=tem
        }
    }
}
// console.log(list)
var dic_1={}
for (i in list){
    for (j in dic){
        if(list[i]==dic[j]){
            dic_1[j]=dic[j]
        }
    }
}
console.log(dic_1)