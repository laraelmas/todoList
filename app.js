const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

const addValue = () => {
  // If the input is empty, don't add it to the list
  if (input.value === "") {
    return;
  }
  const newEl = document.createElement("li");
  newEl.appendChild(document.createTextNode(input.value));
  const deleteBttn = document.createElement("button");
  deleteBttn.appendChild(document.createTextNode("X"));

  // Handles removing the element
  deleteBttn.onclick = () => {
    list.removeChild(newEl);
  };

  newEl.onclick = () => {
    if (newEl.style.textDecorationLine === "line-through") {
      newEl.style.textDecorationLine = "none";
    } else {
      newEl.style.textDecorationLine = "line-through";
    }
  };

  newEl.appendChild(deleteBttn);

  list.appendChild(newEl);
  input.value = "";
};

button.addEventListener("click", addValue);
