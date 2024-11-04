const input = document.getElementById("in1");
const equal = document.getElementById("equal");
const back = document.getElementById("back");
back.addEventListener('click',()=>{
    let temp = input.value;
    temp = temp.split('');
    temp.pop();
    return input.value = temp.join('');
})
function checkNumber(a){
    let numbers=['1','2','3','4','5','6','7','8','9','0']
    return numbers.some(x=>x===a)
}
function changeSymbol(a){
    let temp = input.value.split('')
    if(!checkNumber(temp[temp.length-1])){
        temp.pop();
        temp.push(a);
        return input.value = temp.join('');
    }else if(a==='.'&&temp[temp.length-1]==='.'){
        temp.pop();
        temp.push(a);
        return input.value = temp.join('');
    }else{
        input.value+=a;
    }

}
function isFirstNumberNegative(){
    if(input.value.split('')[0]==='-'){
        return true;
    }else{
        return false;
    }
}

equal.addEventListener('click', ()=>{
    let check = input.value.split('-');
    check = check.join('').split('+').join('').split('*').join('').split('/').join('').split('.').join('');
    if(check.split('').every(el => checkNumber(el))){
        input.value =  eval(input.value);
    }else{
        input.value = "Error"
    }
})
input.addEventListener('keydown', (event)=>{
    if(event.key === '='||event.key==='Enter'){
        event.preventDefault();
        let check = input.value.split('-');
        check = check.join('').split('+').join('').split('*').join('').split('/').join('').split('.').join('');
        if(check.split('').every(el => checkNumber(el))){
            input.value =  eval(input.value).toFixed(2);
        }else{
            input.value = "Error"
        }
    }
})