function task_8()
{
    let num=prompt("Ввидите число");
    if (isNaN(num)) alert ("Error");
    else{
        let arr=num.split('').map(elem=>+elem +1);
        console.log(`Введено число: ${num}, новое число: ${arr.join('')}`);

    }
}