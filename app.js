function setvalue(num){
    //console.log(num)
    let val = document.getElementById("display1")
    var lastVal = val.value.slice(val.value.length - 1);
    var opt = ['+','-','*','/'];
    if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
        val.value = val.value.slice(0,-1) + num
    }else{
        val.value += num;
    }
}
function equaltoo(eql){
    let val = document.getElementById("display1")
    val.value = eval(val.value)
    //console.log(eval(val.value))
}
function remove(empty){
    let val = document.getElementById("display1")
    val.value = empty
    //console.log(val.value)
}
function del(minus1){
    let val = document.getElementById("display1")
    val.value = val.value.slice(0,val.value.length -1)
    console.log(val.value.length -1)
}