console.log("g")
function returnId(id){
    return document.getElementById(id)
}
function returnClasses(classes){
    return document.getElementsByClassName(classes)
}

var fname=returnId('fname'),
email=returnId('email'),
num=returnId('num'),
form=returnId('form'),
form=returnId('btn'),
err=returnClasses('err');
console.log(err)

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    var a=customvalidator(fname,0,'first name is mandatory..')
    var b=customvalidator(email,1,'email name is mandatory..')
    var c=customvalidator(num,2,'num name is mandatory..')
  



})
function customvalidator(documentRef,classid,errorMessage){
    if(documentRef.value.trim()==''){
     
      documentRef.style.border='2px solid white';
    
     
      err[classid].textContent=errorMessage;
      err[classid].style.color=' rgb(141, 89, 22)'
   
    }
    else{
      documentRef.style.color='green';
      documentRef.style.border='2px solid green';
      errmsg[classid].textContent='';
      
  
    }
  }




