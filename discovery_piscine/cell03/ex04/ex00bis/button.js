const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    $('body').css({
      'background-color' : randomColor,
    });
}

document.getElementById("button").addEventListener(
    "click",
    getColor
)