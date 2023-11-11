function task_5()
{
    let arrAverage=function(arr){
        let summ = arr.reduce((sum,elem)=>sum+elem,0);
        return summ/arr.length
    }  
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(arr.toString());
    let average=arrAverage(arr);
    console.log(average.toFixed(1));
}