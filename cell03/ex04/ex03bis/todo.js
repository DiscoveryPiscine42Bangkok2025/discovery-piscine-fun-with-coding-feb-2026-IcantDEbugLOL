$(document).ready(load);

$("#new").click(function () {
    let text = prompt("New TO DO:");
    if (!text) return;
    add(text);
    save();
});

function add(text) {
    const div = $("<div>").text(text);
    div.click(function () {
        if (confirm("Remove?")) {
            $(this).remove();
            save();
        }
    });
    $("#ft_list").prepend(div);
}

function save() {
    const arr = [];
    $("#ft_list div").each(function () {
        arr.push($(this).text());
    });
    document.cookie = "todos=" + JSON.stringify(arr);
}

function load() {
    const c = document.cookie.split("todos=");
    if (c.length > 1) {
        JSON.parse(c[1]).reverse().forEach(add);
    }
}