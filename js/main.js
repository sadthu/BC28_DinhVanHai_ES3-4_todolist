let arrTask = [];
document.querySelector('#addItem').onclick = function () {
    let task = document.querySelector('#newTask').value;
    if (task !== "") {
        arrTask.push(task); 
    } else {
        alert ('Nhập task!')
    }
    listTask(arrTask);
    document.querySelector('#newTask').value = '';
}

function listTask(arrTask) {
    let html ='';
    for (let i = 0; i < arrTask.length; i++) {
        html += `
            <li>
                ${arrTask[i]} 
                <div>
                    <button><i class="fa fa-trash" onclick="delTask('${arrTask[i]}')"></i></button>
                    <button><i class="fa fa-check"></i></button>
                </div>
            </li>
        `
    }
    document.querySelector('#todo').innerHTML = html;
}

window.delTask = (task) => {
    let index = -1
    for (let i = 0; i <arrTask.length; i++) {
        if (task === arrTask[i]) {
            index = i;
            break;
        }
    }
    arrTask.splice(index,1);
    listTask(arrTask); 
}