
const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://vd6e4m4aulgxtqvawncmuyi65y0xwrnc.lambda-url.us-east-1.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();

