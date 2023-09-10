import { tileTypes } from './constants';

export const generateShortestPath = (map = [], startingTiles = [], tilesToVisit = [], endingTiles = []) => {
  // brute forcing for now
  const begin = startingTiles.at(-1);
  const end = endingTiles[0];

  // get all possible paths
};

const getShortestDistance = (map = [], found = {}, end = {}, path = [], depth) => {
  // logging
  console.log(`depth: ${depth}`);
  console.log(`current: ${JSON.stringify(path.at(-1))}`);
  console.log('====================================');
  if (depth >= map.length * map[0].length) return null;
  // logging done

  // using flooding algorithm
  const current = path.at(-1);
  // base cases
  if (found.found) {
    return null;
  }
  if (current.x >= map.length || current.y >= map[0].length) {
    return null;
  }
  if (current.x < 0 || current.y < 0) {
    return null;
  }
  if (map[current.x][current.y] === tileTypes.OBSTACLE) {
    return null;
  }
  if (path.slice(0, path.length - 2).includes(current)) {
    return null;
  }
  if (current.x === end.x && current.y === end.y) {
    found.found = true;
    return path;
  }
  // recursion
  const nextTiles = [
    { x: current.x + 1, y: current.y },
    { x: current.x - 1, y: current.y },
    { x: current.x, y: current.y + 1 },
    { x: current.x, y: current.y - 1 },
  ];
  for (const nextTile of nextTiles) {
    const nextPath = getShortestDistance(map, found, end, [...path, nextTile], depth + 1);
    if (nextPath) {
      return nextPath;
    }
  }

  return null;
};
