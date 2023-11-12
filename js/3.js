function task_3()
{
   function isChetn(arr)
   {
        return arr.every((elem)=>elem%2==0)
   } 
    
       
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr);
    console.log(isChetn(arr));    

}