function task_2()
{
    let arr=Array.from(Array(10),()=>{return Math.round(Math.random()*20)});
    console.log(`задан массив: ${arr.toString()}`);
      
    let newArr=arr.filter(elem=>elem>0 && elem<10);      
    console.log(`элементы массива больше нуля и меньше десяти: ${newArr}`);

    newArr=newArr.reduce((sum,elem)=>sum+elem,0);
    console.log(`сумма элементов по условию:${newArr}`);

}