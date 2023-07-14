function change(){
    var img = document.getElementById("bulb");
    if(img.src.match("bulboff")){
        img.src="./assets/bulbon.jfif";
    }
    else{
        img.src="./assets/bulboff.jfif";
    }
}