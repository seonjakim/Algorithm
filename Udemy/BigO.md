# Speed

O(1) > O(log n) > O(n) > O(nlog n) > O(n^2)

# Logarithm

## Big O of Object Methods

Object.keys = O(n)
Object.values = O(n)
Object.entries = O(n)
hasOwnProperty = O(1)

## Array

### When to use Arrays

- when need order
- need fast access / insertion and removal

### Big O of Arrays

Insertion - vary
insert at the end - O(1)
insert at the beginning - O(n)
Removal - vary
same as insertion
Searching - O(n)
Access - O(1)

push = O(1)
pop = O(1)
shift = O(n)
unshift = O(n)
concat = O(n)
slice = O(n)
splice = O(n)
sort = O(n log n)
forEach / map/ filter/ reduce/ etc = O(n)
