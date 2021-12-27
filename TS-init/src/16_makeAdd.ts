export { };

// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안 된다.

// 1.
function add(x: number | String, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return Number(x + y);
    } else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}
// 에러 나는 이유 : 로직 상으로는 number 나 string으로 반환 된다는 것이 보장되지만,
// 코드 상에서 반드시 number가 반환된다는 보장이 없으므로 명시해주어야 한다.
const v1: number = add(1, 2);
console.log(add(1, '2'));

// 함수 오버로드를 통해 문제 해결
function add2(x: number, y: number): number;
function add2(x: string, y: string): string;
function add2(x: number | String, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') {
        return Number(x + y);
    } else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}
const v2: number = add2(1,2);
console.log(add(1, '2'));
