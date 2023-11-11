function Task_1()
{
    let arr=[4,16,36,25];
    console.log(arr)
    let summ=arr.reduce(function(sum,elem){
        if (elem%2==0) sum+=Math.sqrt(elem);
        return sum;
    },0)  
    alert(summ);
}