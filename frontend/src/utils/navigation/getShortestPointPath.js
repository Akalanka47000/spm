import getDistance from "./getDistance"
import getPermutations from "./getPermutations"
const getShortestPointPath = (start, end, points, floor) => {
  const pointPermutations = getPermutations(points).map((p) => [
    start,
    ...p,
    end,
  ]);

  const shortestPointPath = {
    path: null,
    distance: null,
  };
  pointPermutations.forEach((permutation) => {
    let pathDistance = 0;
    for (let i = 0; i < permutation.length - 1; i++) {
      const distance = getDistance(permutation[i], permutation[i + 1], floor);
      pathDistance += distance;
    }
    if (
      shortestPointPath.distance === null ||
      pathDistance < shortestPointPath.distance
    ) {
      shortestPointPath.path = [...permutation];
      shortestPointPath.distance = pathDistance;
    }
  });
  return shortestPointPath;
};

export default getShortestPointPath;