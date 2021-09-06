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

/**
 * Depth First
 * - prioritizing visiting childeren?
 * - moving away from the root
 *
 * Breath First
 * -
 */

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = []
  }

  addEdge(v1, v2) {
    // if (!this.adjacencyList[v1]) this.adjacencyList[v1] = []
    // if (!this.adjacencyList[v2]) this.adjacencyList[v2] = []
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  search(el, value) {
    const targetArr = this.adjacencyList[el]
    const len = targetArr.length
    for (let i = 0; i < len; i++) {
      if (targetArr[i] === value) {
        targetArr[i] = targetArr[len - 1]
        targetArr.pop()
        return
      }
    }
  }
  removeEdge(v1, v2) {
    // this.search(v1, v2)
    // this.search(v2, v1)
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el !== v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el !== v1)
  }
  removeVertex(vertex) {
    const targetArr = this.adjacencyList[vertex]
    while (targetArr.length) {
      const target = targetArr.pop()
      this.removeEdge(vertex, target)
    }
    delete targetArr
    return this
  }

  DFSRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(start)
    return result
  }
}
