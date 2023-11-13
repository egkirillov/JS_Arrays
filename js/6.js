function task_6()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(`задан массив: ${arr.toString()}`);
      
    function change(arr) {
        arr.push(arr[0])
        arr.shift()
        return arr
      }  
    
    
    console.log(`новый массив: ${change(arr)}`);

}