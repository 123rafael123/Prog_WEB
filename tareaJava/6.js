let array=[1,2,3,4,5,6,7,8,9,1,2,3,1,1,1];
let z=0;
let y=0;
for(let i=0;i<=array.length;i++){
    let x=0;
    for(let j=0;j<=i;j++){
        if(array[i]==array[j]){
            x=x+1
        }
    }
}
