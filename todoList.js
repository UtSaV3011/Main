let list = [];
let ulList = document.getElementById('list');
let addToDoBtn = document.getElementById('addToDo');
addToDoBtn.addEventListener('click', addToDo);

function addToDo() {
    let m = document.getElementById('inputs').value;

    if(!m) {
        return;
    }
    list.push(m);

    // let li = document.createElement('ul');
    // li.appendChild(document.createTextNode(m));
    // ulList.appendChild(li);

    let dropdownNode = document.createElement("select");
    let op1 = new Option();
    let op2 = new Option();
    let op3 = new Option();

    op1 = { value: 1, text: 'Completed'};
    op2 = { value: 2, text: 'TODO'};
    op3 = { value: 3, text: 'Ongoing'};

    dropdownNode.options.add(op1);
    dropdownNode.options.add(op2);    
    dropdownNode.options.add(op3);    


    let row = ulList.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    const id = `${list.length-1}`
    cell2.innerHTML = `<input id=${id} type="button" value="Delete?" class="deleteRow">`;
    cell1.innerHTML = m;
    cell3.innerHTML = dropdownNode;

    document.getElementById('inputs').value = '';
    // let btns = document.getElementsByClassName("deleteRow");
    // for(let i = 0; i < btns.length ; i ++) {
    //     btns[i].addEventListener("click", deleteRow)
    // }

    let btn = document.getElementById(id);
    btn.addEventListener("click", deleteRow);
    
    function deleteRow() {
        this.parentNode.parentNode.remove();
        list.splice(id, 1);
    }
}