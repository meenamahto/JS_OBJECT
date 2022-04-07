// var rs=require("readline-sync");
// var word=rs.question("Enter your word:")
var word="MISSISSIPPI";
var dict={};
for(let i in word){
    var count=0;
    for (let j in word){
        if(word[i]==word[j]){
            count+=1
        }
    dict[word[i]]=count
    }
}
console.log(dict)

// // in other way:-

// const list1=[]
// const word="MISSISSIPPI"
// let output={}
// for (var i of word) {
//       if(list1.includes(i)){
//        output[i]=output[i]+1
    
//   }else{
//        list1.push(i);
//        output[i]=1;
//   }
// }
// console.log(output);