import { traced } from '@sliit-foss/functions';
import { getMap } from './repository';

export const getSystemTotalsSvc = (tilesToVisit = []) => {
  // get the two dimensional array of the map
  const map = traced(getMap)('mock_floor_id');

  // generate the shortest path to visit all the tiles
  
  // return the path
};