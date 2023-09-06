export class Stack {
    //like 프링글스 통
    //후입선출
    //공간복잡도 : O(n)
    arr = [];

    push(value) {
        return this.arr.push(value);
    }
    //O(1)
    pop() {
        return this.arr.pop();
    }
    //O(1)
    top() {
        return this.arr.at(-1);
        //this.arr.[this.arr.length-1]
    }

    get length() {
        return this.arr.length;
    }

    
}
//사용 예시
const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(4); // 5
console.log(stack.length); // 5
stack.pop(); // 4
console.log(stack.top()); // 2;