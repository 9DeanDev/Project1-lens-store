$(document).ready(function () {
    $('.sub-menu').parent('li').addClass('has-child')
})

var Choose = () => {
    alert('Bạn thêm vào giỏ hàng thành công')
    var n = Number(localStorage.getItem('Giỏ')) + 1
    if (n != NaN && n != null) {
        localStorage.setItem('Giỏ', n)
        document.getElementById('choose').innerText = `(${n})`
    }
    else {
        var a = 1
        localStorage.setItem('Giỏ', a)
        document.getElementById('choose').innerText = `(${a})`
    }
}

var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
var login = () => {
    var n = document.getElementById('email').value
    if (pattern.test(n) == true) {
        alert('Bạn đã đăng kí thành công')
    }
    else alert('Email không hợp lệ')
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};