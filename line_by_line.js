var students = {'Aex':{'class':'V',
'rolld_id':2},
'Puja':{'class':'V',
'roll_id':3}}
for (i in students){
    console.log(i)
    for (j in students[i]){
        console.log(j)
        console.log(students[i][j])
    }
}