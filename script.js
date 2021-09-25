// GENERATE RANDOM NUMBER 
let generateButton = document.getElementById('pin');
generateButton.addEventListener('click',function(){
    let number = Math.round(1000+Math.random()*9000);


    document.getElementById('random-display').value =number; 
    document.getElementById('success_').style.display = 'none';
    document.getElementById('failed').style.display = 'none';
 
});
let container = document.getElementById('btn-container_');
container.addEventListener('click',function(event)
{
    let digit = event.target.value;
    digit = parseInt(digit);
    let value = document.getElementById('show-pin').value;
    let i = 0;

    if(isNaN(digit))
    {

    }
    else if(digit==value)
    {
      
    }
    else
    {
        document.getElementById('show-pin').value = value+digit;
    }
   
});
let submit = document.getElementById('submit');
submit.addEventListener('click',function(event){
    
    let myPin = document.getElementById('show-pin').value;
    let generatePin =  document.getElementById('random-display').value; 
    if(myPin==generatePin)
    {
         document.getElementById('show-pin').value = '';
         document.getElementById('random-display').value = ''; 
         document.getElementById('success_').style.display = 'block';
    }
    else
    {
        document.getElementById('show-pin').value = '';
        // document.getElementById('random-display').value = ''; 
        document.getElementById('failed').style.display = 'block';
    }
});
let backSpace = document.getElementById('back-space');
backSpace.addEventListener('click',function()
{
    let value = document.getElementById('show-pin').value;
    let n = value/10;
        n = Math.floor(n);
        if(n>0)
        {
            document.getElementById('show-pin').value =n;
        }
        else if(n==0)
        {
            document.getElementById('show-pin').value ='';
        }
    
})
let clear = document.getElementById('clear');
clear.addEventListener('click',function()
{
    document.getElementById('show-pin').value ='';
})