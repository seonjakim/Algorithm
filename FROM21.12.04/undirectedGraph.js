// 참고자료 : https://www.youtube.com/watch?v=tWVWeAqZ0WU&ab_channel=freeCodeCamp.org

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}
const buildGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true
  if (visited.has(src)) return false
  visited.add(src)
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true
    }
  }
  return false
}

const connectedComponentsCount = (graph) => {
  const visited = new Set()
  let count = 0
  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count++
    }
  }
  return count
}

const explore = (graph, current, visited) => {
  if (visited.has(current.toString())) return false
  visited.add(current.toString())
  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }
  return true
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

console.log(undirectedPath(edges, 'j', 'm'))
console.log(connectedComponentsCount(buildGraph(edges)))

// the largest component between disconnected graph
const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0
  for (let node in graph) {
    const size = exploreSize(graph, node, visited)
    if (size > longest) longest = size
  }
  return longest
}

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0

  visited.add(node)
  let size = 1
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited)
  }
  return size
}

console.log(largestComponent(buildGraph(edges)))

// shortest path

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([nodeA])
  const queue = [[nodeA, 0]]

  while (queue.length > 0) {
    const [node, distance] = queue.shift()

    if (node === nodeB) return distance
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
      }
    }
  }
  return -1
}

// islandCount

const islandCount = (grid) => {
  const visited = new Set()
  let count = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (exploreIsland(grid, r, c, visited) === true) count++
    }
  }
  return count
}

const exploreIsland = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length
  if (!rowInbounds || !colInbounds) return false
  if (grid[r][c] === 'W') return false
  const pos = `${r},${c}`
  if (visited.has(pos)) return false
  visited.add(pos)

  exploreIsland(grid, r - 1, c, visited)
  exploreIsland(grid, r + 1, c, visited)
  exploreIsland(grid, r, c - 1, visited)
  exploreIsland(grid, r, c + 1, visited)
  return true
}

// minimumIsland

const minimumIsland = (grid) => {
  const visited = new Set()
  let minSize = Infinity
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = exploreSize(grid, r, c, visited)
      if (size > 0 && size < minSize) minSize = size
    }
  }
  return minSize
}

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length
  if (!rowInbounds || !colInbounds) return 0

  if (grid[r][c] === 'W') return 0

  const pos = `${r},${c}`
  if (visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
  size += exploreSize(grid, r - 1, c, visited)
  size += exploreSize(grid, r + 1, c, visited)
  size += exploreSize(grid, r, c - 1, visited)
  size += exploreSize(grid, r, c + 1, visited)
  return size
}
