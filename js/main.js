

let button = document.getElementById("submit");
let body_main = document.getElementsByClassName('body_main')[0];
let checkbox = document.getElementById("hide_resp");


button.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  let input = document.getElementById("input_name").value;
  document.getElementsByClassName('body_main')[0].appendChild(createCard(input));
});

body_main.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    const button = e.target;
    const card = button.parentNode;
    const bodyMain = card.parentNode;
    const action = button.textContent;

    const nameAction = {
      remove: () => {
        bodyMain.removeChild(card);
      },
      edit: () => {
        const h3 = card.firstChild;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = h3.textContent;
        card.insertBefore(input, h3);
        card.removeChild(h3);
        button.textContent = 'save';
      },
      save: () => {
        const input = card.firstChild;
        const h3 = document.createElement('h3');
        h3.textContent = input.value;
        card.insertBefore(h3, input);
        card.removeChild(input);
        button.textContent = 'edit';
      }
    }

    nameAction[action]();

  }
});

body_main.addEventListener('change',(e)=>{
    const checkbox=e.target;
    const checked=checkbox.checked;
    const card=checkbox.parentNode;

    if(checked){
      card.classList.add('responded');
    }else{
      card.classList.remove('responded');
    }
});

checkbox.addEventListener('change', (e) => {
  if(checkbox.checked){
    for(let i=0; i < document.getElementsByClassName('card').length; i++){
      if(!String(document.getElementsByClassName('card')[i].classList).includes('responded')){
        document.getElementsByClassName('card')[i].style.display = "none";
      } else {
        document.getElementsByClassName('card')[i].style.display = "block";
      }
    }
  } else {
    for(let i=0; i < document.getElementsByClassName('card').length; i++){
      document.getElementsByClassName('card')[i].style.display = "block";
    }
  }
});









