function Counter() {
    this.value = 0;
    this.add = amount => { //화살표 함수 버전
        this.value += amount;
    };
}

const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);
const add = counter.add;
add(5); //변동 됨. 화살표 함수의 this는 화살표 함수가 생성될 당시를 기억함.
console.log(counter.value);

function Counter2() {
    this.value = 0;
    this.add = function (amount) { //일반 함수 버전
        this.value += amount;
    }
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);
const add2 = counter2.add;
add2(5); //변동 되지 않음. this가 가리키는 것이 counter가 아니기 때문
console.log(counter2.value);