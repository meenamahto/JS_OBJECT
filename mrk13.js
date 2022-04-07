var my_dict = {
    'a':50,
    'b':58,
    'c':46,
    'd':10,
    'e':100,
    'f':20
}
var max=0,max1=0,max2=0;
// console.log(my_dict[0])
for(let i in my_dict){
    if(my_dict[i]>max){
        max=my_dict[i]
        // console.log(my_dict[i])

    }
    else if((my_dict[i]>max1) && (my_dict[i]!=max)){
        // if(my_dict[i]!=max){
            max1=my_dict[i]
        // }

    }
    else if((my_dict[i]>max2)&&(my_dict[i]!=max && my_dict[i]!=max1)){
        // if(my_dict[i]!=max && my_dict[i]!=max1){
            max2=my_dict[i]
        // }
    }
    
}
console.log(max,max1,max2)
