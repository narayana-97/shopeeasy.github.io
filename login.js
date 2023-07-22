// let n=document.getElementById('form3Example1cg').value;
// let p1=document.getElementById('form3Example4cg').value;
// let p2=document.getElementById('form3Example5cdg').value;
// let e=document.getElementById('form3Example3cg');
// b=String(e).includes('@')

function database(){
let n=document.getElementById('form3Example1cg').value;
let p1=document.getElementById('form3Example4cg').value;
let p2=document.getElementById('form3Example5cdg').value;
let e=document.getElementById('form3Example3cg');


if(p1=='' || n=='' || p2==''||e==''){
    alert('Please enter full details to continue!')
}
else{
    if(p1==p2 && p1.length>=8 && p2.length>=8){
     location.assign("index.html");
    }
    else{
        alert('ERROR! Give the deatils CORRECTLY!')
    }
}       
    
}
function payment(event){
    event.preventDefault();
    let cn = document.getElementById('cn').value;
    let cv = document.getElementById('cv').value;
    if(cn.length == 16 && cv.length ==3){
        console.log("hi");
        // location.assign("succes.html");
        window.location.href="succes.html";
    }   
    else{
        
        alert('Please Enter Card details correctly!');
         
              
    }

}