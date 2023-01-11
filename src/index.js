import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addToIncompleteList(inputText);
};

//未完了リストから要素削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから要素削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

//未完了→完了リスト
const addToCompleteList = (target, text) => {
  //div以下初期化
  target.textContent = null;

  // li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = text;

  //戻すbutton生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    //押された戻すボタンの親タグの完了リストから削除
    deleteFromCompleteList(backButton.closest("li"));
    //戻すボタンが押されたタスクを未完了リストへ
    addToIncompleteList(backButton.parentNode.firstElementChild.innerText);
  });
  //li子要素
  li.appendChild(div);

  //div子要素追加
  div.appendChild(p);
  div.appendChild(backButton);

  //リスト追加
  document.getElementById("complete-list").appendChild(li);
};

// 未完了リスト追加
const addToIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = text;

  //完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグの未完了リストから削除
    deleteFromIncompleteList(completeButton.closest("li"));
    //完了ボタンが押されたタスクを完了リストへ
    addToCompleteList(
      completeButton.parentNode,
      completeButton.parentNode.firstElementChild.innerText
    );
  });

  //削除button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグの未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  //li子要素
  li.appendChild(div);

  //div子要素追加
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リスト追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
