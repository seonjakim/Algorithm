/** reference : https://fireship.io/courses/javascript/interview-graphs/
 *              https://www.youtube.com/watch?v=cWNEl4HE2OE&ab_channel=Fireship
 *  time complexity : O(n)
 */
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK']
];

const adjacencyList = new Map();

const addNode = (airport) => {
  adjacencyList.set(airport, []);
}

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

/** BFS Breadth First Search */
const bfs = (start) => {

  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === 'BKK') {
        console.log('found it!');
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination)
      }
    }
  }
}

//bfs('PHX');

/** DFS Depth First Search */
const dfs = (start, visited = new Set()) => {
  console.log(start);
  visited.add(start);

  const destinations = adjacencyList.get(start);
  
  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log('DPS found BKK in steps');
      return ;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

//dfs('PHX');