const textarea = document.getElementById('textarea');
const body = document.getElementById('body');
const display = document.getElementById('display');
const btn = document.getElementById('btn');
const fontChange = document.getElementById('fontChange');
const btnLineheightAdd = document.getElementById('btnLineheightAdd');
const btnLineheightSub = document.getElementById('btnLineheightSub');
const btnStrictSizeAdd = document.getElementById('btnStrictSizeAdd');
const btnStrictSizeSub = document.getElementById('btnStrictSizeSub');
const btnfontWeightAdd = document.getElementById('btnfontWeightAdd');
const btnfontWeightSub = document.getElementById('btnfontWeightSub');
const btnMarginLeftAdd = document.getElementById('btnMarginLeftAdd');
const btnMarginLeftSub = document.getElementById('btnMarginLeftSub');
const btnMarginRightAdd = document.getElementById('btnMarginRightAdd');
const btnMarginRightSub = document.getElementById('btnMarginRightSub');
const btnBackgroundColor = document.getElementById('btnBackgroundColor');





btn.addEventListener('click', () => {
  const textValue = textarea.value;
  display.innerText = textValue;
})

//フォント----------------------------------------------------------------------------------
fontChange.addEventListener('click', () => {
  const font = fontChange.value;
  display.style.fontFamily = font;
})

//行間-------------------------------------------------------------------------------------
let lineheightCount = 1.5;
btnLineheightAdd.addEventListener('click', () => {
  lineheightCount += 0.1;
  display.style.lineHeight = lineheightCount;
})

btnLineheightSub.addEventListener('click', () => {
  lineheightCount -= 0.1;
  display.style.lineHeight = lineheightCount;
})

//文字サイズ--------------------------------------------------------------------------------
let strictCount = 16;
btnStrictSizeAdd.addEventListener('click', () => {
  strictCount += 1;
  display.style.fontSize = `${strictCount}px`
})

btnStrictSizeSub.addEventListener('click', () => {
  strictCount -= 1;
  display.style.fontSize = `${strictCount}px`

})

//文字の太さ---------------------------------------------------------------------------------
let fontWeightCount = 400;
btnfontWeightAdd.addEventListener('click', () => {
  fontWeightCount += 200;
  if (fontWeightCount > 900){
    fontWeightCount = 900;
  }
  display.style.fontWeight = fontWeightCount;
})

btnfontWeightSub.addEventListener('click', () => {
  fontWeightCount -= 200;
  if (fontWeightCount < 100){
    fontWeightCount = 100;
  }
  display.style.fontWeight = fontWeightCount;
})
//背景色---------------------------------------------------------------------------------
const backColor = ["white","beige","skyblue","black"];
let colorCount = 0;
btnBackgroundColor.addEventListener('click', () => {
  colorCount++;
  colorCount %= 4;
  body.style.backgroundColor = `${backColor[colorCount]}`;
})

//Marginのやつ--------------------------------------------------------------------------
let marginLeftCount = 100;
btnMarginLeftAdd.addEventListener('click', () => {
  marginLeftCount += 10;
  display.style.marginLeft = `${marginLeftCount}px`;
})

btnMarginLeftSub.addEventListener('click', () => {
  marginLeftCount -= 10;
  display.style.marginLeft = `${marginLeftCount}px`;
})

let marginRightCount = 100;
btnMarginRightAdd.addEventListener('click', () => {
  marginRightCount += 10;
  display.style.marginRight = `${marginRightCount}px`;
})

btnMarginRightSub.addEventListener('click', () => {
  marginRightCount -= 10;
  display.style.marginRight = `${marginRightCount}px`;
})

//マーカーのやつ--------------------------------------------------------------------------
const text = document.querySelector('.display')



// text でなく document.body を監視しないと
// 選択領域上でmouseupしたとき
// 選択しつつtext外でmouseupしたとき
// を拾えない
display.addEventListener('mouseup', () => {
  const selection = window.getSelection()

  if (selection.type === 'Range') {
    // 選択領域の選択開始位置のNodeと選択終了位置のNodeを取得
    const anchorNode = selection.anchorNode
    const focusNode = selection.focusNode

    // 選択開始位置と選択終了位置のNodeが同じでないと、タグで囲えない
    if (anchorNode === focusNode) {
      // markタグ内にmarkタグを作らないように、textの子を選択したときだけ

      if (anchorNode.parentElement === text) {
         
        const range = document.createRange()

        // 後ろから前に選択したときは、無効なrangeになる。
        // 今回は気にしない。必要であれば、anchorOffsetとfocusOffsetを入れ替えれば良い
       
        range.setStart(anchorNode, selection.anchorOffset)
        range.setEnd(anchorNode, selection.focusOffset)

        const mark = document.createElement('mark')
        range.surroundContents(mark)
        anchorNode.parentElement.normalize();
      }else{
        //const range = document.createRange()

        console.log(anchorNode);
        console.log(anchorNode.parentElement);
        anchorNode.parentElement.replaceWith(anchorNode);
        anchorNode.parentElement.normalize();
        //let tag = anchorNode.parentElement;
        //let result = tag.toStrong().replace(/^<mark>(.+?)<\/mark>$/, '$1');
        //range.innerText = anchorNode;      
      }
    }
  }
})