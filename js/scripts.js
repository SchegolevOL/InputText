let button = document.querySelector("#buttonFormatText");
let text = document.querySelector("#text");


button.addEventListener("click", (event) => {
  let form = document.querySelector("form");

  document.querySelector("#Bold").checked
    ? text.style.setProperty("font-weight", "bold")
    : text.style.setProperty("font-weight", "normal");

  document.querySelector("#Underline").checked
    ? text.style.setProperty("text-decoration", "underline")
    : text.style.setProperty("text-decoration", "none");

  document.querySelector("#Italics").checked
    ? text.style.setProperty("font-style", "italic")
    : text.style.setProperty("font-style", "normal");

  let data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = entry[1];
  }
  console.log(output);
  switch (output) {
    case "Left":      
      text.style.setProperty("text-align", "left");
      break;
    case "Right":
      text.style.setProperty("text-align", "right");
      break;
    case "Justify":
      text.style.setProperty("text-align", "justify");
      break;
  }
  console.log(text.style);
 
});
