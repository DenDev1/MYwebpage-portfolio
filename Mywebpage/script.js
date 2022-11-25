const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() =>  {
        text.textContent = " Dendo Pulgo";
    }, 0);
    setTimeout(() =>  {
        text.textContent = " IT Support";
    }, 4000);
    setTimeout(() =>  {
        text.textContent = " Software Engineer";
    }, 8000); ////1s =1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);