// โหลด todo ตอนเปิดหน้า
window.onload = loadTodos;

function newTodo() {
    var text = prompt("Enter a new TO DO:");
    if (!text)
        return;

    addTodo(text);
    saveTodos();
}

function addTodo(text) {
    var list = document.getElementById("ft_list");
    var item = document.createElement("div");

    item.textContent = text;

    item.onclick = function () {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove();
            saveTodos();
        }
    };

    // เพิ่มไว้บนสุด
    list.prepend(item);
}

function saveTodos() {
    var list = document.getElementById("ft_list");
    var todos = [];

    for (var i = 0; i < list.children.length; i++) {
        todos.push(list.children[i].textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        if (parts[0] === "todos") {
            var todos = JSON.parse(decodeURIComponent(parts[1]));
            for (var j = todos.length - 1; j >= 0; j--) {
                addTodo(todos[j]);
            }
        }
    }
}
