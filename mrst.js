//30.000以下の同種・別種ルーン計算式

let baseSmall = 27.927;
let materialSmall = 27.898 - 27;

materialSmall = (materialSmall / 5) + 0.1;
let materialSmallAnother = (materialSmall / 10) + 0.05;
let sumSmall = baseSmall + materialSmall;
let sumSmallAnother = baseSmall + materialSmallAnother;
sumSmall = sumSmall.toFixed(3);
sumSmallAnother = sumSmallAnother.toFixed(3);
console.log(baseSmall + "に同種ルーンの" + materialSmall + "を足すと" + sumSmall);
console.log(baseSmall + "に別種ルーンの" + materialSmallAnother + "を足すと" + sumSmallAnother);


//30.001以上の同種ルーン計算式

