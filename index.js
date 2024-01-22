var error =document.querySelector("#error")
var result=0
// function convert(){ 
// }
var plus=false
document.getElementById('value-one').addEventListener('input',function(e){
    var regex= /^[0-9]+$/
    if(!regex.test(e.target.value)){
       error.style.display='block'
    }else{
        error.style.display='none'
    }

})

document.querySelector('#btn').addEventListener('click',function(e){
    if(plus){
    const valueOne=document.getElementById('value-one').value
    const valueOptionOne=document.getElementById('one-option').value
    const valueOptionTwo=document.getElementById('selector').value
    const printElement=document.getElementById('printresult')
    e.preventDefault()
    if(valueOptionOne==1&& valueOptionTwo==1){
        result=valueOne
        printElement.textContent=`به ازای هر ${valueOne}متر ،${valueOne}متر داریم `
    }
    if(valueOptionOne==1 && valueOptionTwo==2){
        result=valueOne*(Math.pow(10,valueOptionTwo))
        printElement.textContent=`به ازای هر ${valueOne}متر ،${result}سانتی متر داریم `
    }
    if(valueOptionOne==2 && valueOptionTwo==1){
        result=valueOne/(Math.pow(10,valueOptionOne))
        printElement.textContent=`به ازای هر ${valueOne}سانتیمتر ،${result} متر داریم `
    }
    if(valueOptionOne==2&& valueOptionTwo==2){
        result=valueOne
        printElement.textContent=`به ازای هر ${valueOne}سانتی متر ،${valueOne}سانتی متر داریم `
    }
}else{
    printElement.textContent='مقادیر را به درستی وارد کنید '
}
})
