// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// class SLLNode {  // this is a class for building a node in our SLL class
//     constructor(val){
//         this.value = val; // this will be where our value for the node goes
//         this.next = null;//and this will be our pointer to the next node
//     }
// }


// class SLL { //this is the class for the actual singly linked list
//     constructor(){
//         this.head = null; //the head points to the first node
//     }
//     addFront(value) {
//         //start by creating a new node by creating a new instance of the node class and then assigning the value passed in to it
//         let newNode = new SLLNode(value);
//         //now we need o actually connect the node we made to the singliy linked list by assigning the pointers value to the head 
//         newNode.next = this.head;
//         //in the same breath, we need to make the new node now be the new head so that it is added to the front of the Singly Linked List
//         this.head = newNode;
//         //and finally we need to RETURN a pointer to the new head node that we have established
//         return this.head;
//         }
//     }

// let testList = new SLL();
// testList.addFront(18);
// testList.addFront(5);
// testList.addFront(73);
// console.log(testList);
// console.log(testList.head.next);
// Examples:
// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// class SLLNode {  // this is a class for building a node in our SLL class
//     constructor(val){
//         this.value = val; // this will be where our value for the node goes
//         this.next = null;//and this will be our pointer to the next node
//     }
// }

// class SLL {
//     constructor(){
//         this.head = null; //the head points to the first node
//     }
//     removeFront() {
//         if(this.head == null){//first thing is first lets make sure there is even a list to remove the head from
//             return this.head;
//         }
//         let saveNode = this.head; // we have to set aside the head node to get it off the list 
//         this.head = saveNode.next;//then we can make the next value in the list the new head
//         saveNode.next = null; //then by changing the pointer of what used to be the head of the list to null it is officially disconnected from the list
//         return this.head; //then just return the head that has been newly assigned 
//     }
//         addFront(value) {
//         let newNode = new SLLNode(value);        //start by creating a new node by creating a new instance of the node class and then assigning the value passed in to it
//         newNode.next = this.head;        //now we need o actually connect the node we made to the singliy linked list by assigning the pointers value to the head 
//         this.head = newNode;        //in the same breath, we need to make the new node now be the new head so that it is added to the front of the Singly Linked List
//         return this.head;        //and finally we need to RETURN a pointer to the new head node that we have established
//         }
// }
// let testList = new SLL();
// testList.addFront(18);
// testList.addFront(5);
// console.log(testList);
// testList.removeFront()
// console.log(testList);

 // Examples:
// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }



// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

//     class SLLNode {  // this is a class for building a node in our SLL class
//         constructor(val){
//             this.value = val; // this will be where our value for the node goes
//             this.next = null;//and this will be our pointer to the next node
//         }
//     }
    
//     class SLL {
//         constructor(){
//             this.head = null; //the head points to the first node
//         }
//         getFront(){
//             if(this.head == null){
//                 return null;
//             }
//             else{
//                 let frontValue = this.head.value;
//                 return frontValue;
//             }
//         }
//         removeFront() {
//             if(this.head == null){//first thing is first lets make sure there is even a list to remove the head from
//                 return this.head;
//             }
//             let saveNode = this.head; // we have to set aside the head node to get it off the list 
//             this.head = saveNode.next;//then we can make the next value in the list the new head
//             saveNode.next = null; //then by changing the pointer of what used to be the head of the list to null it is officially disconnected from the list
//             return this.head; //then just return the head that has been newly assigned 
//         }
//             addFront(value) {
//             let newNode = new SLLNode(value);        //start by creating a new node by creating a new instance of the node class and then assigning the value passed in to it
//             newNode.next = this.head;        //now we need o actually connect the node we made to the singliy linked list by assigning the pointers value to the head 
//             this.head = newNode;        //in the same breath, we need to make the new node now be the new head so that it is added to the front of the Singly Linked List
//             return this.head;        //and finally we need to RETURN a pointer to the new head node that we have established
//             }
//     }

// let testList = new SLL();

// console.log(testList.getFront());
// testList.addFront(5);
// console.log(testList.getFront());
// testList.addFront(18);
// console.log(testList.getFront());
// // Examples:
// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null