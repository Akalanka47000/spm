import getShortestPointPath from './getShortestPointPath';
import getShortestPath from './getShortestPath';

const navigate = (start, end, points, floor) => {
  // special cases
  if (points.length === 0) {
    return getShortestPath(start, end, floor);
  }
  // special cases done
  const shortestPointPath = getShortestPointPath(start, end, points, floor);
  const shortestPath = [];

  for (let i = 0; i < shortestPointPath.path.length - 1; i++) {
    const path = getShortestPath(shortestPointPath.path[i], shortestPointPath.path[i + 1], floor);
    if (path) shortestPath.push(...path);
  }

  return shortestPath;
};

export default navigate;
