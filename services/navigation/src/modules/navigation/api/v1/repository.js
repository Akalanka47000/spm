export const getMap = async (floorId) => {
  // if cached, get from redis
  // else get from db

  // for now, mocking
  return {
    id: floorId,
    name: 'Floor 1',
    map: {
      width: 6,
      height: 6,
      map: [
        [2, 2, 2, 2, 2, 2],
        [0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 2, 2, 2, 2, 0],
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 1],
      ],
    },
  };
};
