/**
 * Digkstra's
 *  - shortest path from one node to all nodes
 *
 * Bellman-Ford
 *  - shortest path from one node to all nodes, negative edges allowed
 *
 * Floyd-Warshall
 *  - shortest path between all pairs of vertices, negative edges allowed
 *  O(v^3)
 */
// reference : https://www.youtube.com/watch?v=nV_wOZnhbog&ab_channel=TECHDOSE
// example
// Distances don't get modified for Kth adjacent vertices
const D = [
  [0, 3, Infinity, 5],
  [2, 0, Infinity, 8],
  [Infinity, 1, 0, Infinity],
  [Infinity, Infinity, 2, 0],
]
const D0 = [
  [0, 3, Infinity, 5],
  [2, 0, empty, empty],
  [Infinity, empty, 0, empty],
  [Infinity, empty, empty, 0],
]

d[0][1] = 8
d[0][1] = min(d[0][1], d[0][2] + d[2][1])
d[0][1] = min(d[0][1], d[0][3] + d[3][1]) = min(7, 5 + 1)
d[i][j] = min(d[i][j], d[i][k] + d[k][j])
