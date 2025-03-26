document.addEventListener("DOMContentLoaded",function(){

    document.querySelector("#nameOption").innerHTML = localStorage.getItem("name");
    //document.querySelector("#text").style.background = localStorage.getItem("color");

    document.body.classList.add(localStorage.getItem("color"));
    document.querySelector("#mainContainer").classList.add(localStorage.getItem("color"));
    document.querySelector("#buttonOption").classList.add(localStorage.getItem("color"));

    if (localStorage.getItem("font") == "audiowide") {
        document.querySelector("#textOption").classList.add("audiowide-regular");
        document.querySelector("#messageOption").classList.add("audiowide-regular");
        document.querySelector("#buttonOption").classList.add("audiowide-regular");
        
    } else if (localStorage.getItem("font") == "amarante") {
        document.querySelector("#textOption").classList.add("amarante-regular");
        document.querySelector("#messageOption").classList.add("amarante-regular");
        document.querySelector("#buttonOption").classList.add("amarante-regular");
    } else {
        document.querySelector("#textOption").classList.add("monoton-regular");
        document.querySelector("#messageOption").classList.add("monoton-regular");
        document.querySelector("#buttonOption").classList.add("monoton-regular");
    }

    console.log(localStorage.getItem("message"));
    if (localStorage.getItem("message") == "checked") {
        document.querySelector("#messageOption").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut tempor libero. Etiam vitae mollis leo, nec mollis enim. Mauris euismod, augue et pulvinar vulputate, enim est congue leo, in condimentum sem magna a ante. Integer sapien massa, posuere eget ante ut, cursus suscipit ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis ante purus. Nam elit nisi, viverra luctus ipsum ut, convallis ullamcorper erat. Mauris ultrices ut velit vel finibus. Vivamus efficitur sodales risus, commodo pharetra sem mattis nec. In eget nulla sit amet erat mattis pulvinar in quis augue. Etiam venenatis interdum tellus, vitae semper elit euismod mollis. Etiam suscipit imperdiet orci. Proin consequat lectus ligula, id fringilla elit aliquam et. Ut dictum quis est vehicula vestibulum. z";
    } else {
        document.querySelector("#messageOption").innerHTML = "You left the message box unchecked :/";
    }
        

    if (localStorage.getItem("spacing") == "low_space") {
        document.querySelector("#textOption").classList.add("smallSpacing");
        document.querySelector("#messageOption").classList.add("smallSpacing");
        document.querySelector("#mainContainer").classList.add("smallSpacing");
    } else if (localStorage.getItem("spacing") == "mid_space") {
        document.querySelector("#textOption").classList.add("mediumSpacing");
        document.querySelector("#messageOption").classList.add("mediumSpacing");
        document.querySelector("#mainContainer").classList.add("mediumSpacing");
    } else {
        document.querySelector("#textOption").classList.add("largeSpacing");
        document.querySelector("#messageOption").classList.add("largeSpacing");
        document.querySelector("#mainContainer").classList.add("largeSpacing");
    }

    if (localStorage.getItem("button") == "round") {
        document.querySelector("#buttonOption").classList.add("rounded");
    } else if (localStorage.getItem("button") == "standard") {
        document.querySelector("#buttonOption").classList.add("standard");
     }else {
        document.querySelector("#buttonOption").classList.add("dashed");
    }

    



    console.log("Name: " + localStorage.getItem("name"));
    console.log("Color: " + localStorage.getItem("color"));
    console.log("Font: " + localStorage.getItem("font"));
    console.log("Spacing: " + localStorage.getItem("spacing"));
    console.log("Button: " + localStorage.getItem("button"));
    console.log("Message: " + localStorage.getItem("message"));



})
