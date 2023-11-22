function changeName (){
    let inputName = document.getElementById('inputName');
    let myName = prompt('What your name');
    inputName.innerHTML = 'Hello ' + myName;
}