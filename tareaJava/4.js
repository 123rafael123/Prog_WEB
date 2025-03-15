let arrays=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let x;
for(let i=0;i<=arrays.length;i++){
    for(let j=1;j<arrays[i];j++){
        if(arrays[i]%j==0){
            x=x+1
        }
    }
    if(x<2){
        console.log("El numero "+arrays[i]+" es primo");
    }
    x=0;
}
