export default function getPermutations(arr) {
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
    const innerPermutations = getPermutations(remainingElements);

    for (let j = 0; j < innerPermutations.length; j++) {
      result.push([currentElement].concat(innerPermutations[j]));
    }
  }

  return result;
}