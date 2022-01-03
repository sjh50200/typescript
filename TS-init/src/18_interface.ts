export { };

interface Person {
    name: string;
    age?: number;
}

const p1: Person = { name: 'mike', age: 23 };
const p2: Person = { name: 'mike', age: 'ten' };
const p3: Person = { name: 'mike' }

interface Person2 {
    readonly name: string,
    age?: number;
}

const p4: Person2 = {
    name: 'mike',
}
p4.name = 'jone';

const p5 = {
    name: 'mike',
    birthday: '1997-0101';
}
const p6: Person = p5; //속성값이 존재하지 않아도 된다. p6가 p5을 포함하는 더 큰 타입임

//인덱스 타입
interface Person3 {
    readonly name: string;
    age: number;
    [key: string]: string | number; // 속성 명을 정의하지 않고 값의 타입만 정의하는 것을 인덱스 타입이라고 부름
}