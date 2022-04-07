const rs=require("readline-sync");
let n=rs.questionInt("Enter your number:");
let dict={}
for (let i=1;i<=n;i++){
    dict[i]=i*i
}
console.log(dict)