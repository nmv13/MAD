import { qs, qsa, bindTouch, readFromLS, writeToLS , removeFromLS} from "./utilities.js";
let toDoList = [];

export function saveTodo(toDo) {
    const newToDo = { id: new Date(), value: toDo, completed: false };
    toDoList.push(newToDo);
    writeToLS("toDo", toDoList);
}

export default class Todo {
    constructor() {
        this.parentElement = document.getElementById("list");
        bindTouch("#newTodoButton", this.addNewTodo.bind(this)); // in the utilitles function, it loses "this" meaning
        this.listTodos();
        bindTouch("#completeTodo", this.completeTodo.bind(this));
        bindTouch("#removeTodo", this.removeTodo.bind(this));
    }
    listTodos() {

        this.parentElement.innerHTML = "";

        if (toDoList.length == 0) {
            toDoList = readFromLS("toDo");
        }

        toDoList.forEach((toDo, i) => {
            this.parentElement.appendChild(display(toDo, i));
        });
    }
    addNewTodo() {
        // get todo text
        const todoText = qs("#newTodo");
        // save to datastore
        saveTodo(todoText.value);
        // list todo's
        this.listTodos();
    }
    removeTodo() {
        var check = 0;
        var text = "";

        for (var i = 0; i < toDoList.length; i++)
        {
           if (document.getElementById(i).checked == true)
           {
                check = i;
                console.log("check " + check);
                text = toDoList[check].value;
                console.log("value " + text);
                toDoList.splice(check, 1);
                removeFromLS("text", toDoList);
                this.listTodos();
           }
        }
    }

    completeTodo() {

        var check = 0;
        var text = "";
        var strike = "";

        for (var i = 0; i < toDoList.length; i++)
        {
           if (document.getElementById(i).checked == true)
           {
                check = i;
                console.log("check " + check);
                text = toDoList[check].value;
                strike = text.strike();
                toDoList[check].value = strike;
                console.log(strike);
                console.log(toDoList[check].value);
                removeFromLS("text", toDoList);
                writeToLS("strike", toDoList);
                this.listTodos();
           }
        }
    }
}

export function display(toDo, i) {

    const node = document.createElement("LI");
    node.classList.add("toDo");
    node.innerHTML = `<input type="checkbox" id="${i}" class="check"><h3>${toDo.value}</h3>`;
    document.getElementById('newTodo').value = '';
    document.getElementById('newTodo').focus();
    return node;
}