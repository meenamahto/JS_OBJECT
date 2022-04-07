var l=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
]
var list=[]
for (let i in l){
    for(let j in l[i]){
        if(!list.includes(l[i][j])){
            list.push(l[i][j])
        }
    }
}
console.log(list)