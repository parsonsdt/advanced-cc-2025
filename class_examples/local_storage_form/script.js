document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){

    })

    let radios = document.querySelectorAll('.radio'); 

    for (var i = radios.length - 1; i >= 0; i--) {
       radios[i].addEventListener('change',function(){
            localStorage.setItem("color", this.value)
        })
    }

})
