var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv=document.querySelector("#outputbox");

// var serverURL = "https://api.funtranslations.com/translate/minion.json"
var serverURL ="https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured",error)
    alert("Something Wrong with the Server. Please Try Again Later")
}

function clickHandler(){

    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText= json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)

} 

btnTranslate.addEventListener("click", clickHandler)


// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json