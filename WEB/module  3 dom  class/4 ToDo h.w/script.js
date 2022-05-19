let inputTag=document.querySelector('input')
let ulTag=document.querySelector('')

inputTag.addEventListener('keydown',function(e){
    let key=e.key
    if(key=='Enter'){
        let value=inputTag.value;
        inputTag.value="";
        let liTag=document.createElement('li')
        liTag.innerHTML= `<div>${value}</div>
        <img class="delete" src="delete.png" alt="" />`
        ulTag.appendChild(liTag)

    }
})