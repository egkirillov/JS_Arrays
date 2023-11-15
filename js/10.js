function task_10()
{
    let data = [
        {
            1: 11,
            2: 12,
            3: 13,
        },
        {
            1: 21,
            2: 22,
            3: 23,
        },
        {
            1: 24,
            2: 25,
            3: 26,
        },
    ];   
    
    let arr1=[]
        for (let key in data) {
        let subObj = data[key];
        
            for (let subKey in subObj) {
                arr1.push(subKey);
            }
        }
    console.log(arr1)
    
    newArr1=arr1.map(elem=>parseInt(elem));

    let arrSumm=function(arr1){
        let summ = arr1.reduce((sum,elem)=>sum+elem,0);
        return summ
    }  
    
    let summnewArr1=arrSumm(newArr1);
    console.log(summnewArr1);

    

    let arr2=[]
    for (let key in data) {
    let subObj = data[key];
    
        for (let subKey in subObj) {
            arr2.push(subObj[subKey]);
        }
    }
    console.log(arr2)

    let summ2=arrSumm(arr2);
    console.log(summ2);

}