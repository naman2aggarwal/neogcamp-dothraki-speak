let inputTextArea = document.querySelector("#inputTextArea");
let dothrakiTextArea = document.querySelector("#dothrakiTextArea");

let translateButton = document.querySelector("#btn-translate");

let url =
  "https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/dothraki.json";

translateButton.addEventListener("click", translateToDothraki);

function translateToDothraki() {
  let inputTxt = inputTextArea.value;

  fetch(generateUrl(inputTxt))
    .then((response) => response.json())
    .then((data) => {
      dothrakiTextArea.value = data.contents.translated;
    })
    .catch(() => alert("Some error occured!, Please try after sometime."));
}

function generateUrl(val) {
  let encodedValue = encodeURI(val);
  return `${url}?text=${encodedValue}`;
}
