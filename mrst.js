function rune(){

  const formInput = document.getElementById("exampleFormControlInput1");
  formInput.addEventListener("input", () =>{
    let inputValue = formInput.value;
    if(inputValue.length === 6){
      let material = 29.835 - 27;

      let base = Number(inputValue);

      //入力した値の小数点によって目標値を設定する
      let baseTargetFirst;
      if((base - Math.floor(base)).toFixed(3) < 0.500){
        baseTargetFirst = (Math.ceil(base) - 0.5).toFixed(3);
      }else{
        baseTargetFirst = (Math.ceil(base)).toFixed(3);
      }
      let baseTargetSecond = (Number(baseTargetFirst) + 0.5).toFixed(3);

      //目標値を出力する
      const outputTargetFirst = document.getElementById("target-first");
      outputTargetFirst.innerHTML = baseTargetFirst;
      const outputTargetSecond = document.getElementById("target-second");
      outputTargetSecond.innerHTML = baseTargetSecond;

      console.log(baseTargetFirst,baseTargetSecond,outputTarget);



  //目標値と入力値の差分を定義
  let targetDifFirst = (baseTargetFirst - base).toFixed(3);
  let targetDifSecond = (baseTargetSecond - base).toFixed(3);

  let a = (((targetDifFirst - 0.1) * 5) + 27).toFixed(3);
  let b = ((targetDifFirst - 0.05) * 10).toFixed(3);
  console.log(targetDifFirst,a,b);

  //console.log(targetDifFirst,targetDifSecond);
  let materialSmallSame = (material / 5) + 0.1;
  let materialSmallAnother = (material / 10) + 0.05;

  let sumSmallSame = (base + materialSmallSame).toFixed(3);
  let sumSmallAnother = (base + materialSmallAnother).toFixed(3);
  console.log("30.000以下同種：" + sumSmallSame);
  console.log("30.000以下別種：" + sumSmallAnother);

//30.001以上の同種ルーン計算式

let materialBigSame = ((material / 5) + 0.1) / 2;
let materialBigAnother = ((material / 5) + 0.1) / 4;

let sumBigSame = (base + materialBigSame).toFixed(3);
let sumBigAnother = (base + materialBigAnother).toFixed(3);
console.log("30.001以上同種：" + sumBigSame);
console.log("30.001以上別種：" + sumBigAnother);
    }
});
}


window.addEventListener("load",rune);