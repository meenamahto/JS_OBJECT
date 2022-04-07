var dic= {'1':['a','b'], '2':['c','d']};
for (let i in dic["1"]){
    for (let j in dic["2"]){
        console.log(dic["1"][i]+dic["2"][j])
    }
}