var mainString="My name is kumar, and my friend's name is Dhamu";
var subString="is";
var a=mainString.split(" ");
const rs=require("readline-sync");
let word=rs.question("Enter your word");
for (let i in a){
    if(word==a[i]){
        a.splice(i,1)
    }
}
mainString=a.join(" ")
console.log(mainString)
