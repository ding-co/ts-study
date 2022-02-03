let i: 3 = 3;
i = 4; // '4' 타입은 '3' 타입에 할당 불가

let j = [1, 2, 3];
j.push(4);
j.push('5'); // '"5"' 타입의 인수를 'number' 타입의 매개변수에 할당 불가

let k: never = 4; // '4' 타입은 'never' 타입에 할당 불가

let l: unknown = 4;
let m = l * 2; // 'unknown' 타입의 객체임
