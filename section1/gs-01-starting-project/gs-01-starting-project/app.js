const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

function addGoal(){
    const val = input.value;
    const listData = document.createElement('li')
    listData.innerText = val;
    list.appendChild(listData);
    input.value = '';

}

btn.addEventListener('click',()=>{
    addGoal();
})