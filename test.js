/*1.elseを使用する時の注意点
・elseの使用はifがある時だけ使用できる。独立して使用はできない。
・if文とelseの間に処理を書いてもエラーになってしまう。*/


/*2.JavaScriptで実装した時の確認ポイント
・エラーが発生するとコンソールにエラーが表示されるため動くか確認する。
・また、コンソールにエラーを表示してないかも確認する。*/


//3.数値型を比較してelseの処理に入る処理
var num = 100;
if (num == 1000){
  console.log("条件Aの処理");
  console.log(num);
} else {
  console.log("条件Bの処理");
  console.log(num);
}


//4.文字列型を比較してelseの処理に入る処理
var text = "JavaScript";
if(text == "HTML"){
  console.log("条件Aの処理");
  console.log(text);
} else {
  console.log("条件Bの処理");
  console.log(text);
}
