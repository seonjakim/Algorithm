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
