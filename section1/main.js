/*
JavaScriptとJavaの違い
<br>[１]
<br>動的型付け言語　変数の中身を自動で判定　javascript
<br>静的型付け言語　変数の中身を自分でつける　java
<br>
<br>[２]
<br>javascriptは全てオブジェクトで扱う

*/

/*
変数　varの書き方
ES5までの書き方　基本もう使わない（IEはこちらを使っている）
変数の値を直接書き換えられる
*/
// var test = 1;
// var test = 'aaa';
// console.log(test);
// test += 'bbb';
// console.log(test);

/*
変数　letの書き方
ES6の書き方　基本こちらを使用する（chromeはこちらを使っている）
変数の値を直接書き換えられない。後から値の計算や結合等はできる
*/
// let test = 1;
// console.log('typeof = ' + typeof test);
// // let test = 'aaa';
// test += 'aaa';
// console.log('test = ' + test);
// console.log('typeof = ' + typeof test);

/*
 動的型付け言語　変数の中身を自動で判定　javascript
 静的型付け言語　変数の中身を自分でつける　java
*/

/*
定数　constの書き方
*/
// const TEST = '定数';
// console.log('TEST= ' + TEST);

/*
配列　書き方
*/
// const arrayTest = ['赤','青','黄'];
// const arrayTest2 = [
//     ['赤','青','黄'],
//     ['白','黒','緑']
// ];

// console.log(arrayTest);
// console.log(arrayTest2);
// console.log(arrayTest2.length);
// console.log(arrayTest2[1].length);
// console.log(arrayTest2[0][1]);

/*
連想配列　書き方
*/
// const associativeArray = {
//     'name':'taro',
//     'age':10,
//     'origin':'tokyo'
// };

// console.log(associativeArray);
// console.log(associativeArray['name']);
// console.log(associativeArray.age);

// const member = {
//     'honda':{
//         'bloodType':'A',
//         'age':10
//     },
//     'kagawa':{
//         'bloodType':'B',
//         'age':10
//     }
// };
// console.log(member);
// console.log(member.honda.bloodType);

// const member_2 = {
//     'fistclass':{
//         'tanaka':{
//             'bloodType':'A',
//             'age':10
//         },
//         'saito':{
//             'bloodType':'B',
//             'age':10
//         }

//     },
//     'secondclass':{
//         'yamada':{
//             'bloodType':'O',
//             'age':10
//         },
//         'sato':{
//             'bloodType':'AB',
//             'age':10
//         }
//     }
// };

// console.log(member_2);
// console.log(member_2.fistclass.saito);

/*
四則演算
*/

// const test1 = 1;
// let test2 = 2;
// test2 += 3;
// const calculation = test1 + test2;
// console.log(calculation);

/*
if
*/

//== 一致
//=== 型も一致

// const height = 90;
// const strHeight = '90';

// if (height == 90) {
//   console.log('1つ目の身長は' + height + 'cm');
// }

// if (strHeight === 90) {
//   //型が異なるので出力されない
//   console.log('2つ目の身長は' + height + 'cm');
// }

//基本的には===を使用する

/*
if !===
*/

// const height_2 = 91;
// const strHeight_2 = '91';

// if (height_2 === 90) {
//   console.log('身長は90cm');
// } else if (height_2 != 90) {
//   console.log('身長は' + height_2 + 'cm');
// }

// if (strHeight_2 !== 91) {
//   console.log('身長は' + height_2 + 'cm');
// }

//!= 一致
//!== 型も一致

/*
for 繰り返し
for in　問題あり。あまり使用しない
for of ES6から javaでいう拡張for文
*/

// const scores = [10, 20, 30];

// //one of them
// for (const score of scores) {
//   console.log(score);
// }

/*
function
*/

// //引数  :なし
// //戻り値:なし
// function test(){
//     console.log('test');
// }

// test();

//引数  :あり
//戻り値:なし

// function getComment(str){
//     console.log(str);
// }

// getComment('コメントをとるよ');

//引数  :なし
//戻り値:あり

// function getCommentOfNumber(){
//     return 5;
// }

// const commentNum = getCommentOfNumber();
// console.log(commentNum);

//引数  :あり
//戻り値:あり

// function sum(num1,num2){
//     return num1 + num2;
// }

// console.log(sum(1,2));

/*
組み込み関数
String
*/
//オブジェクトとは
// let num = 1;
// console.log('オブジェクトのタイプは' + typeof num);
// let str = 'aaa';
// console.log('オブジェクトのタイプは' + typeof str);

// const str = 'a';
// const str2 = 'b';
// const str3 = 'c';
// console.log(str.concat(str2,str3));

/*
Map
*/

//オブジェクトの作成
// const myMap = new Map();

// myMap.set('name','Taro')
// myMap.set('value',100);

// console.log(myMap);

// console.log(typeof myMap.get('name'));
// console.log(typeof myMap.get('value'));
// console.log(myMap.values());
// console.log(myMap.keys());

/*
Array
*/
// const fruits = new Array();
// fruits.push('リンゴ');
// fruits.push('バナナ');
// console.log(fruits);

//シンタックスシュガー（簡単に書く方法）
// const fruits2 = [
//     'リンゴ', 'バナナ'
// ];
// console.log(fruits2);

// const fruits3 = [
//     'リンゴ', 'バナナ'
// ];
// console.log(fruits3);
// fruits3.push('メロン');
// console.log(fruits3);

//JSではconstでも後からpushで値の追加をすることができる!!!!!

/*
コールバック関数
　引数の中に関数設定されているもののこと
*/

// fruits.forEach(function(input){
//     console.log(input);
// });

// console.log(fruits.length);
// console.log(typeof fruits);
// const str = fruits[0];
// console.log(str);
// console.log(typeof str);
// console.log(str.substring(0,1));


/*
無名関数
他の場所から呼び出されることがない関数は名前をつけない。だから無名関数
その場限りでしか使用しないことを想定しているため。
*/

// // 一般的な関数
// function getSmpleItem(){};

// // 名前がない関数　コールバック関数
// fruits.forEach(function(input){
//     console.log(input);
// });

/*
アロー関数
　functionと記載せず、=>と記載する方法
*/

//名前がある関数の場合
// const 関数名 = () => console.log('アロー');
// const getItemArrow = () => {
//   console.log('アロー');
// };
// getItemArrow();

// const getItem = function() {
//     console.log('アロー');
// };
// getItem();

//名前がない関数　コールバック関数
// const fruits = ['りんご', 'バナナ', 'スイカ'];
// fruits.forEach(function(input) {
//   console.log(input);
// });

// fruits.forEach((input) => {
//   console.log(input);
// });

/*
アロー関数の省略
*/
//通常のアロー関数
const getComment = ((comment) => {
    console.log(comment);
});
getComment('通常のアロー関数');

//省略したアロー関数 引数が１個の場合()が不要
const getComment2 = comment => {
  console.log(comment);
};
getComment2('アロー関数　引数が１個の場合()が不要');

//省略したアロー関数
const getComment3 = comment => console.log(comment);
getComment3('アロー関数　処理が１行なら{}も不要。');

//処理が１行なら{}も不要。returnも省略
// fruits.forEach(input => console.log(input));

// const tax = (price, tax) => price * tax;
// console.log(tax(100, 0.1));
