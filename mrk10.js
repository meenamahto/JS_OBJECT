var dict={};
const rs=require("readline-sync");
for (let i=1;i<=10;i++){
    var name=rs.question("Enter your name:");
    var marks=rs.questionInt("Enter your marks:");
    dict[name]=marks
}
console.log(dict)
