export default createContactPage;

function createContactPage(){
  var main = document.querySelector('main');
  var form = document.createElement('form');
  
  var fieldSet = document.createElement('fieldset');
  
  var legend = document.createElement('legend');
  legend.textContent  = "Contact Us";
  fieldSet.appendChild(legend);

  form.appendChild(createInput('input','text','Full Name: '));
  form.appendChild(createInput('input','email', 'Email: '));
  form.appendChild(createInput('textarea', 'textarea' ,'Comment: '));
  form.appendChild(createButton());
  fieldSet.appendChild(form);
  main.appendChild(fieldSet);
}

function createInput(element,type,name){
  var label = document.createElement('label');
  var div = document.createElement('div');

  label.textContent = name;
  label.setAttribute('for', name);
  div.appendChild(label);

  var input = document.createElement(element);
  if(element !== 'textarea')
    input.setAttribute('type',type);
  input.setAttribute('id',name);
  input.setAttribute('name',name);
  input.setAttribute('required',true);
  div.appendChild(input);

  return div;
}

function createButton(){
  var button = document.createElement('button');
  button.textContent = 'send';
  button.addEventListener('click',(e)=>{
    e.preventDefault();
  })
  return button;
}