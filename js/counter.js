const container = document.querySelectorAll("#cards");

container.forEach((e) => {
  const h1Element = e.querySelector("h1");
  const dataValue = h1Element.getAttribute("data-width");
  console.log(dataValue);

  var start = 0;
  var end = parseInt(dataValue);
  var count = start;

  var counter = setInterval(() => {
    if (count < end) {
      count++;
      h1Element.innerText = `${count}+`;
      console.log(count);
    } else {
      clearInterval(counter);
    }
  }, 10);
});
