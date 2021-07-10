/** Tree-based partially ordered data structure
 * Two types : max-heap and min-heap
 * Any node's key <= parent's key >= child's keys
 */

/** Binary Heap
 * a complete binary tree
 * effective for implementing a priority queue
 * implemented as an array
 */

/** Complexity
 * Push : O(log n)
 * Poll : O(log n)
 * Search : O(n)
 * Peek : O(1)
 */

 /** reference : https://www.youtube.com/watch?v=hzxa4psfxxg&ab_channel=QuestionableCoding */

 class Heap {
   constructor() {
     this.data = [];
   }

   getParentIndex(i) {
     return Math.floor((i - 1) / 2);
   }

   getLeftChildIndex(i) {
     return i * 2 + 1;
   }

   getRightChildIndex(i) {
     return i * 2 + 2;
   }

   swap(i1, i2) {
     const temp = this.data[i1];
     this.data[i1] = this.data[i2];
     this.data[i2] = temp;
   }

   push(key) {
     this.data[this.data.length] = key;
     this.heapifyUp();
   }

   heapifyUp() {
     let current = this.data.length - 1;

     while (this.data[current] > this.data[this.getParentIndex(current)]) {
       this.swap(current, this.getParentIndex(current));

       current = this.getParentIndex(current);
     }
   }

   poll() {
     const maxValue = this.data[0];
     this.data[0] = this.data[this.data.length - 1];

     this.data.length--;
     this.heapifyDown();

     return maxValue;
   }

  heapifyDown() {
    let current = 0;

    while (this.data[this.getLeftChildIndex(current)] !== undefined) {
      let biggestChildidx = this.getLeftChildIndex(current);

      if (this.data[this.getRightChildIndex(current)] !== undefined &&
      this.data[this.getRightChildIndex(current)] > this.data[this.getLeftChildIndex(current)]) {
        biggestChildidx = this.getRightChildIndex(current);
      }
    }

    if (this.data[current] < this.data[biggestChildidx]) {
      this.swap(current, biggestChildidx);

      current = biggestChildidx;
    } else {
      return ;
    }
  }
 }

 const heap = new Heap();
 console.log(heap);
 heap.push(25);
 heap.push(5);
 heap.push(40);
 heap.push(70);
 heap.push(90);
 heap.push(44);

 console.log(heap.data.join(','));

 let a = [];
 a.push(heap.poll());
 a.push(heap.poll());
 a.push(heap.poll());
 a.push(heap.poll());
 a.push(heap.poll());

 console.log('Top 5 items:', a);
 console.log(heap.data.join(','));