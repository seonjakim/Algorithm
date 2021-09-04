/**
 * a data structure
 * collection of nodes and connections of those nodes
 *
 * Uses of Graphs
 * - social networks
 * - location / mapping
 * - routing algorithms
 * - visual hierarchy
 * - file system optimizations
 *
 * Types of Graphs
 * - vertex
 * - directed / undirected
 * - weighted / unweighted
 */

/**
 * Adjacency matrix
 * - takes up more space
 * - faster to lookup specific edge
 *
 * Adjacency list
 * - takes up less space
 * - faster to iterate over all edges
 */

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = []
  }
}
