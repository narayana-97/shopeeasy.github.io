// window.addEventListener("scroll",function(){
//     const windowScrollTop = window.scrollTop;
//     const elementToHide = document.getElementById("content");
  
//     elementToHide.style.clipPath = `inset(${windowScrollTop}px 0 0 0)`;
//   });
//   document.getElementById("menu").onchange = function() {
//     if (this.selectedIndex!==0) {
//         window.location.href = this.value;
//     }        
// };

function goToNewPage()
{
    var url = document.getElementById('menu').value;
    if(url != 'none') {
        window.location = url;
    }
}