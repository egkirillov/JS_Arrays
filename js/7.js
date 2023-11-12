function task_7()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let summaChetn=arr.reduce((sum,elem,index)=>{
        if (index%2==0) sum=sum+elem;
        return sum;
    },0);
    let summaNechetn=arr.reduce((sum,elem,index)=>{
        if (index%2!==0) sum=sum+elem;
        return sum;
    },0);
    console.log(summaChetn/summaNechetn)    
}