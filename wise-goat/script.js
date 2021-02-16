function reqListiner () {

}

function reqListener () {
    let { slip: {  advice } } = JSON.parse(this.responseText);
    document.getElementById('frase').innerHTML = advice;
}

let request = new XMLHttpRequest();
request.addEventListener("load", reqListener);
request.open("GET", "https://api.adviceslip.com/advice");
request.send();