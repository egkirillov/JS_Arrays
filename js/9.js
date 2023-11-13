function task_9()
{
    let arr=prompt("Введите массив со строками через запятую").split(',');
    console.log(arr);

    function functionFilters(arr) {
        return arr.filter((elem) => elem.startsWith("http://"));
        }
        console.log(functionFilters(arr));
}
