class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.head = null;
      this.length = 0;
  }

  // 스택에 원소를 삽입 (push)
  push(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
  }

  // 스택의 최상단 원소를 제거하고 반환 (pop)
  pop() {
      if (this.head === null) {
          return null;
      }
      const valueToReturn = this.head.value;
      this.head = this.head.next;
      this.length--;
      return valueToReturn;
  }

  // 스택의 최상단 원소를 확인 (peek or top)
  peek() {
      if (this.head === null) {
          return null;
      }
      return this.head.value;
  }

  // 스택의 길이를 반환
  size() {
      return this.length;
  }
}

// 사용 예시
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());  // 3
console.log(myStack.pop());   // 3
console.log(myStack.peek());  // 2
console.log(myStack.size());  // 2
