// 참고자료 : https://www.youtube.com/watch?v=t2CEgPsws3U
//functon : push , pop, peek, length
//palindrome

let letters = []; //arrays is the same as stack

let word = "racecar";
let reverseWord = "";

//put letters of word into stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
  reverseWord += letters.pop();
}

if (reverseWord === word) {
  console.log(word + "is a palindrome.");
} else {
  console.log(word + "is not a palindrome.");
}


//implement stack in this palindrome example

let Stack = funciton(){
  this.count=0;
  this.storage={};

  //adds a value onto the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++
  }

  //removes and returns the value at the end of the stack
  this.pop=function(){
    if(this.count===0){
      return undefined
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function(){
    return this.count;
  }
  
  //return the value at the end of the stack
  this.peak = function(){
    return this.storage[this.count-1]
  }
}
