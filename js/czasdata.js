document.addEventListener("DOMContentLoaded",startCzasData)

function startCzasData() {
    piszdata();
    setInterval(piszczas, 1000);
}


function piszczas() {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let czas = "";
    czas += ((hh < 10) ? "0" : "") + hh;
    czas += ((mm < 10) ? "0" : ":") + mm;
    czas += ((ss < 10) ? "0" : ":") + ss;
    document.getElementById("czas").innerHTML = "godz: " + czas;
}

function piszdata() {
    let d = new Date()
    let dd = d.getDate()
    let mm = d.getMonth() + 1;
    let yyyy = d.getFullYear();
    let data = "";
    data += ((dd < 10) ? "0" : "") + dd;
    data += "." + ((mm <10) ? "0" : "") + mm;
    data += "." + yyyy;
    document.getElementById("data").innerHTML = "Dziś jest " + data;
}