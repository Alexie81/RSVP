function createCard(text){
  
  let card = document.createElement("div");
  card.classList.add("card");

  function createElement(elementName, property, value){
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }
  function appendToDiv(elementName,property,value){
    const element=createElement(elementName,property,value);
    card.appendChild(element);
    return element;
  }
  appendToDiv('h3', 'innerText', text)
  appendToDiv('br', '', '');
  let label = appendToDiv('label','textContent','Confirmed');
  label.htmlFor = 'confirmed';
  let checkbox = appendToDiv('input', 'type', 'checkbox');
  checkbox.id = 'confirmed';
  checkbox.classList.add("check_resp");
  appendToDiv('br', '', '');
  let edit = appendToDiv('button', 'innerHTML', 'edit');
  edit.classList.add("btn");
  edit.classList.add("btn_edit");
  let remove = appendToDiv('button', 'innerHTML', 'remove');
  remove.classList.add("btn");
  remove.classList.add("btn_remove");

  return card;
}

