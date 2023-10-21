export default function findShortestPath(start, end, floor) {
  const numRows = floor.length;
  const numCols = floor[0].length;

  const visited = Array.from({ length: numRows }, () =>
    Array(numCols).fill(false)
  );
  const queue = [[start, [start]]];

  const isValid = (row, col) => {
    return (
      row >= 0 &&
      row < numRows &&
      col >= 0 &&
      col < numCols &&
      floor[row][col] === 1 &&
      !visited[row][col]
    );
  };

  while (queue.length > 0) {
    const [position, path] = queue.shift();
    const [row, col] = position;

    if (row === end[0] && col === end[1]) {
      return path;
    }

    visited[row][col] = true;

    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    for (const neighbor of neighbors) {
      const [r, c] = neighbor;
      if (isValid(r, c)) {
        const newPath = [...path, [r, c]];
        queue.push([[r, c], newPath]);
      }
    }
  }

  return null; // If no path is found
}
