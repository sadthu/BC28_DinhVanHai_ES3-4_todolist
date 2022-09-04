// let arrTask = [];
let html = '';
document.querySelector('#addItem').onclick = function () {
    let task = document.querySelector('#newTask').value;
    if (task !== "") {
        html += `
            <li>
                ${task} 
                <div>
                    <button><i class="fa fa-trash" onclick="delTask('${task}')"></i></button>
                    <button><i class="fa fa-check"></i></button>
                </div>
            </li>
        `
        // arrTask.push(html);
    } else {
        alert ('Nhập task!')
    }
    document.querySelector('#newTask').value = '';
    document.querySelector('#todo').innerHTML = html;
    // console.log(arrTask)
}

window.delTask = (task) => {
    let arrLi = document.querySelectorAll('#todo li');
    console.log(arrLi[0].innerHTML);
}