// // Nested Dictionary:-

var list=[1, 2, 3, 4,5];
var new_dict=dict={};
for (let i=0; i<list.length;i++){
    dict[list[i]]={}
    dict=dict[list[i]]
    console.log(list[i])
}
console.log(new_dict)


// //Python program to convert more than one list to nested dictionary:-

// var list1=['S001', 'S002', 'S003', 'S004'];
// var list2=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards'];
// var list3=[85, 98, 89, 92];
// list=[]
// for (let i in list1){
//     let dict={};
//     let final_dict={};
//     dict[list2[i]]=list3[i]
//     final_dict[list1[i]]=dict
//     list.push(final_dict)
// }
// console.log(list)


/*Write a Python program to split a given dictionary of lists into list of dictionaries.
Original dictionary of lists:-*/
// I/p:-{'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}

/* O/p:-[{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language':
84}, {'Science': 95, 'Language': 80}]*/

// var dict={'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]};
// let list=[];
// value1=dict["Science"];
// value2=dict["Language"]
// for (let i in value1){
//     d={}
//     for(let j in dict){
//         d["Science"]=value1[i]
//         d["Language"]=value2[i]
//     }
//     list.push(d)
// }
// console.log(list)