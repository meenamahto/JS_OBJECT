var dict={"name":"Raju", "marks":56};
var rs=require("readline-sync");
var key=rs.question("Enter your key:");
for (let i in dict){
    if(i==key){
        console.log("Exist")
        // break
    // }else{
        // console.log("Not exist")
        // break
    }
}

