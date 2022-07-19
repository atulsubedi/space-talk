    const text = document.querySelector("#text-in")
    const ButtonTranslate = document.querySelector("#btn-translate")
    const output = document.querySelector("#output")
    const ServerUrl = "https://api.funtranslations.com/translate/groot.json"
    ButtonTranslate.addEventListener("click",  ClickHandler)
    function GetTranslationUrl (text){
        return ServerUrl + "?" + "text=" + text
    }
    function errorHandler(error){
        console.log("error occur", error)
        alert("something is wrong with the server please try again later!!")
    }
    function ClickHandler(){

    const InputText = text.value;
    fetch(GetTranslationUrl(InputText))
    .then(response => response.json())
    .then(json=> {
        const translation = json.contents.translated;
        output.innerText = translation;
    })
    .catch(errorHandler)

    



    }