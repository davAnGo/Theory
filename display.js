
    class SLLNode {  // this is a class for building a node in our SLL class
        constructor(val){
            this.value = val; // this will be where our value for the node goes
            this.next = null;//and this will be our pointer to the next node
        }
    }

    class SLL {
        constructor(){
            this.head = null; //the head points to the first node
        }
        display(){
            let runner = this.head;//we set the runner to be the head in order to start it at the beginneing but at the list iterates it will become the next node in line
            let collectionOfValues = []; //we are goint to collect the values of the nodes in an array
            let listOfValues = " ";//and then we will convert the array to a string that can be read as a list
            while(runner !== null){ //have to use a while loop to iterate through a linked list because we do not know when it will end. we do know that null is the end though
                collectionOfValues.push(runner.value);//we are going to populate our array with push
                runner = runner.next;//we are going to set our runners pointer to next at the end of each iteration in order to start at the beginning of the next node each time
                console.log(collectionOfValues);//lets go ahead and see what our array is each time we iterate 
            }
            listOfValues = collectionOfValues.join();//here is where the conversion happens
            return listOfValues; //and we return our converted list. 
        }
        getFront(){
            if(this.head == null){
                return null;
            }
            else{
                let frontValue = this.head.value;
                return frontValue;
            }
        }
        removeFront() {
            if(this.head == null){//first thing is first lets make sure there is even a list to remove the head from
                return this.head;
            }
            let saveNode = this.head; // we have to set aside the head node to get it off the list 
            this.head = saveNode.next;//then we can make the next value in the list the new head
            saveNode.next = null; //then by changing the pointer of what used to be the head of the list to null it is officially disconnected from the list
            return this.head; //then just return the head that has been newly assigned 
        }
        addFront(value) {
            let newNode = new SLLNode(value);        //start by creating a new node by creating a new instance of the node class and then assigning the value passed in to it
            newNode.next = this.head;        //now we need o actually connect the node we made to the singliy linked list by assigning the pointers value to the head 
            this.head = newNode;        //in the same breath, we need to make the new node now be the new head so that it is added to the front of the Singly Linked List
            return this.head;        //and finally we need to RETURN a pointer to the new head node that we have established
            }
    }

let testList = new SLL();
testList.addFront(1);
testList.addFront(2);
testList.addFront(3);
testList.addFront(4);
console.log(testList.display());