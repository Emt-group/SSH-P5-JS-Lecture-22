// Javascript 사용하기 예제 코드
// 6. 클래스
/*
 * 클래스를 사용해서 현실의 물건을 묘사할 수 있다.
 * 클래스를 사용해서 주문표를 작성할 수 있다.
 */

function classes() {
    console.log('6. 클래스 사용해보기');

    console.log('[음료 묘사하기]');

    // 아메리카노 선언
    let americano = new Drink('아메리카노', '커피', 500);

    // 음료 상태 출력
    americano.print();
    console.log(' ');

    // 음료 마시기
    americano.drink();
    americano.drink();
    americano.drink();
    americano.drink();
    americano.drink();

    // 음료 잔이 비었습니다!
    americano.drink();
    console.log(' ');

    // 음료 리필하기
    americano.refill();
    americano.print();
    console.log(' ');

    // while 문 응용하기
    while (!americano.isEmpty()) {
        americano.drink();
    }
    console.log(' ');

    console.log('[주문서 작성하기]');

    // 주문서 작성해보기
    let order = new Order(1, '치즈케잌 김치찌개', 1);

    // 주문 현황 출력
    order.print();
    order.order();      // 주문 성공!
    console.log(' ');

    order = new Order(2, '민트초코 초콜릿 찌개', 2);

    order.print();
    order.fail();       // 주문 실패
    console.log(' ');
}

// 음료에 대한 클래스
class Drink {
    // 생성자: 음료의 이름, 종류, 용량 설정하기
    constructor(name, type, size) {
        this.name = name;
        this.type = type;
        this.size = size;

        this.remain = this.size;
    }

    // 음료 잔이 비었는가?
    isEmpty() {
        if (this.remain === 0) {
            return true;
        } else {
            return false;
        }
    }

    // 음료 잔이 꽉 찼는가?
    isFull() {
        if (this.remain === this.size) {
            return true;
        } else {
            return false;
        }
    }

    // 음료 상태 출력하기
    print() {
        console.log(`음료의 이름: ${this.name}`);
        console.log(`음료의 종류: ${this.type}`);
        console.log(`음료의 용량: ${this.size}`);
        console.log(`음료의 남은 용량: ${this.remain}`);
    }

    // 음료 마시기
    drink() {
        if (this.remain > 0) {
            this.remain -= 100;
            console.log('음료를 마셨습니다!');
            console.log(`남은 용량: ${this.remain}`);
        } else {
            console.log('음료 잔이 비었습니다!');
        }
    }

    // 음료 리필하기
    refill() {
        console.log('음료를 리필했습니다!');
        this.remain = this.size;
    }
}

// 주문에 대한 클래스
class Order {
    // 생성자: 테이블 번호, 메뉴 이름, 수량 설정하기
    constructor(tableNumber, menu, quantity) {
        this.tableNumber = tableNumber;
        this.menu = menu;
        this.quantity = quantity;
    }

    // 주문 출력하기
    print() {
        console.log(`${this.tableNumber}번 테이블에서 ${this.menu}(을)를 ${this.quantity}개 주문했습니다.`);
    }

    // 주문 성공!
    order() {
        console.log('주문 완료했습니다!');
    }

    // 주문 실패
    fail() {
        console.log(`${this.menu}(은)는 말도 안 되는 메뉴입니다.`);
    }
}

classes();