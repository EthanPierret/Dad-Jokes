import dadhandler from "./data.js";
import domeditor from "./dom.js";




dadhandler.makedadjoke().then(data => domeditor.makedadintodom(data));
//first dad joke on page laod



document.querySelector("#button").addEventListener("click", event => { // adds ability to click button for more dad jokes
    dadhandler.makedadjoke().then(data => domeditor.makedadintodom(data));
})