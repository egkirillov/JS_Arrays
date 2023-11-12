function task_4()
{
   function calcFife(arr)
   {
        let newArr=arr.filter((elem)=>elem%5==0);
        return newArr;
   } 
           
    let arr=[1,2,5,12,15,21];
    console.log(calcFife(arr));    

}