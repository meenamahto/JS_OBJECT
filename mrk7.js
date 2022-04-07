var myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
}
for(let i in myDict){
    if(typeof(myDict[i]==Object)){
        delete myDict[i]["A"]
    }
}
console.log(myDict)