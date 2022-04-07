var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
}
var count=0;
for(let i in dict){
    for (let j in dict[i]){
        count+=1
    }
}
console.log("count of value=",count)