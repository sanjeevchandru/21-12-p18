document.write("To remove a specific element an array"+"<br>")
let arr=[1,2,3,6,7,8];
document.write("The original array :"+arr+"<br>");
let x=6;
let f1=(arr,x)=>{
    let y=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=x){
            y.push(arr[i]);
        }
    }
    return y;
}
document.write(f1(arr,x));