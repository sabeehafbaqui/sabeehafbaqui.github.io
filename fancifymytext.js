function makeBigger(){
    alert("Hello, world!");

    document.getElementById("textarea").style.fontSize = "24pt";

    event.preventDefault(); 
}

function setFancy() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline"
     
}

function setBoring() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "green";
    document.getElementById("textarea").style.textDecoration = "none";

}

function handleRadioChange() {
    if (document.getElementById("fancy").checked) {
        alert("Fancy Shmancy!")
        setFancy();
    } else if (document.getElementById("boring").checked) {
        alert("Boring Betty.")
        setBoring();
    }
}

function toUpperCase(){
    var textArea = document.getElementById("textarea");
    var text = textArea.value.toUpperCase();
    
    var sentences = text.split(". ");
    
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo";
        sentences[i] = words.join(" ");
    }
    
    text = sentences.join(". ");

    textArea.value = text;

    event.preventDefault(); 
}

document.getElementById("fancy").addEventListener("change", handleRadioChange);
document.getElementById("boring").addEventListener("change", handleRadioChange);