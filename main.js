var myForm = document.createDocumentFragment();

var input = document.createElement('input');
input.setAttribute('id', 'user-input');
var button = document.createElement('button');
button.setAttribute('id', 'btn');
button.appendChild(document.createTextNode('Add task'));

myForm.appendChild(input);
myForm.appendChild(button);

var ul = document.createElement('ul');
ul.setAttribute('id', 'list');

document.getElementById('main').appendChild(myForm);
document.getElementById('main').appendChild(ul);

document.getElementById('btn').addEventListener('click', function () {

    var userInput = document.getElementById('user-input').value;
    var listItemTag =  document.createElement('li');

    var inputTag =  document.createElement('input');
    inputTag.type = "checkbox";
    var pTag =  document.createElement('p');
    pTag.innerHTML = userInput;
    var buttonTag =  document.createElement('button');
    var buttonText = document.createTextNode('Delete');
    buttonTag.appendChild(buttonText);

    listItemTag.appendChild(inputTag);
    listItemTag.appendChild(pTag);
    listItemTag.appendChild(buttonTag);

    document.getElementById('list').appendChild(listItemTag);
    document.getElementById('user-input').value = "";

    pTag.addEventListener('click', editItem);
    var editInput = document.createElement('input');

    function editItem() {
        pTag.replaceWith(editInput);
        editInput.focus();
        editInput.setSelectionRange(0, editInput.value.length);
    }

    editInput.addEventListener('blur', updateItem);

    function updateItem() {
        editInput.replaceWith(pTag);
        pTag.innerHTML = editInput.value;
    }

    inputTag.addEventListener('click', itemDone);

    function itemDone() {
        if (inputTag.checked) {
            pTag.classList.add('done');
        } else {
            pTag.classList.remove('done');
        }
    }

    buttonTag.addEventListener('click', removeItem); 

    function removeItem() {
        listItemTag.classList.add('remove');
    }

});
