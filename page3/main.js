// DOM要素を参照
const elementButton = document.querySelector("#buttonExecute");

// イベントを登録
elementButton.addEventListener("click", update);

/** 計算し画面に結果を表示 */
function update() {
    // 要素を参照
    const elementNum1 = document.querySelector("#number_1");
    const elementNum2 = document.querySelector("#number_2");
    const elementResult = document.querySelector("#calc_result");

    // フォーム値を取得
    const num1 = Number(elementNum1.value);
    const num2 = Number(elementNum2.value);

    // かけ算を行う
    const result = num1 * num2;

    // 画面に表示
    elementResult.innerHTML = result; // テキストを代入
}
