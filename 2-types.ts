let a:number;
let b:boolean;
let c:string;
let d:any;
let e:number[]=[1,3,4];
let f:any[]=[true,1,2,3,4,false];

const colorRed=0;
const colorGreen=1;
const colorBlue=2;

enum Color{Red=0,Green=1,Purple=3,Blue=2};

// let bgColor=colorRed;

let bgColor=Color.Red;

console.log("Red",Color.Red);
console.log("Purple",Color.Purple);

