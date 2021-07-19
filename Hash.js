/** Object, Map, dictionary, Hash table all the same thing
 * reference : https://www.youtube.com/watch?v=UOxTMOCTEZk&ab_channel=BenAwad
 */

// const person = {};
// person['firstName'] = 'bob';
// person['lastName'] = 'bobby';
function hashSringToInt(s, tableSize) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(17);
  numItems = 0;
  resize = () => {
    const newTable = new Array(table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {});
      }
    });
  };

  setItem = (key, value) => {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    const idx = hashSringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };
  getItem = (key) => {
    const idx = hashSringToInt(key, this.table.length);
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'bob');
myTable.getItem('firstName');
console.log(myTable.getItem('firstName'));
