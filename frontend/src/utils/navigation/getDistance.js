function getNeighbors(x, y, floor) {
  const neighbors = [];
  if (floor[x - 1] && floor[x - 1][y]) neighbors.push([x - 1, y]);
  if (floor[x + 1] && floor[x + 1][y]) neighbors.push([x + 1, y]);
  if (floor[x][y - 1]) neighbors.push([x, y - 1]);
  if (floor[x][y + 1]) neighbors.push([x, y + 1]);
  return neighbors;
}

export default function dijkstra(start, end, floor) {
  const visited = new Set();
  const distances = {};
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    if (current.toString() === end.toString()) return distance;

    const neighbors = getNeighbors(...current, floor);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        const newDistance = distance + 1;
        if (!distances[neighbor] || newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          queue.push([neighbor, newDistance]);
        }
      }
    }
  }

  return -1; // If no path is found
}
