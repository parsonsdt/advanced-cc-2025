document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#name").addEventListener("keyup",function(){
        let val = this.value;
        localStorage.setItem("name", val) 
    })

    let radios = document.querySelectorAll('.radio'); 

    for (let i = radios.length - 1; i >= 0; i--) {
       radios[i].addEventListener('change',function(){
            localStorage.setItem("color", this.value)
        })
    }

    let fontOption = document.querySelector('#fontOption');

    fontOption.addEventListener('change',function(){
        localStorage.setItem("font", this.value)
    })

    let spacingOptions = document.querySelectorAll('.spacing-radio');

    for (let i = spacingOptions.length - 1; i >= 0; i--) {
        spacingOptions[i].addEventListener('change',function(){
            localStorage.setItem("spacing", this.value)
        })
    }

    let buttonOption = document.querySelector('#buttonOption');

    buttonOption.addEventListener('change',function(){
        localStorage.setItem("button", this.value)
    })

    let randomMessage = document.querySelector('#randomMsg');

    randomMessage.addEventListener('change', function() {
        if(randomMessage.checked){
            console.log("checked");
            localStorage.setItem("message", "checked");
        } else {
            console.log("unchecked");
            localStorage.setItem("message", "unchecked");
        }
      });


})
