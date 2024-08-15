import './style.css';

const onClickAdd = () => {
    // テキストボックスの値の取得と初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    div.appendChild(p);
    li.appendChild(div);

    console.log(li)

    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);
