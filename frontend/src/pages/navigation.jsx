import { default as Layout } from '../components/layout';
import { useState, useEffect } from 'react';
import Box from '../components/navigation/box';
import { floor } from '../utils/navigation/floor';
import navigate from '../utils/navigation/navigate';
import { getAllProductsWithoutPagination } from '../services';
import { Button } from '../components/common';

const Navigation = () => {
  const start = [7, 1];
  const end = [7, 14];
  const [points, setPoints] = useState([]);
  const [path, setPath] = useState(navigate(start, end, points, floor));

  const [colorArray, setColorArray] = useState(
    floor.map((row) => {
      return row.map((col) => {
        if (col === 0) return 'gray';
        else return 'white';
      });
    }),
  );

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if (cart.length) {
      getAllProductsWithoutPagination(`filter[_id]=in(${cart})`).then((data) => {
        if (data) {
          // setProducts(data.data)
          setPoints([...points, ...data.data.map((product) => product.location)]);
          // data.data.forEach((product) => {
          // console.log("location", product.location);
          // })
        }
      });
    }
  }, []);

  useEffect(() => {
    setPath(navigate(start, end, points, floor));
  }, [points]);

  useEffect(() => {
    path.forEach((point) => {
      const newColorArray = [...colorArray];
      newColorArray[point[0]][point[1]] = 'green';
    });
    [...points, start, end].forEach((point) => {
      const newColorArray = [...colorArray];
      newColorArray[point[0]][point[1]] = 'yellow';
    });
  }, [path]);

  const [refresh, doRefresh] = useState(true);

  return (
    <Layout title="Navigation">
      <div className='flex flex-col items-center justify-center w-screen mt-10'>
        <div className="border border-black w-fit">
          {floor.map((e, i) => (
            <div className="flex" key={i}>
              {e.map((e, j) => (
                <Box key={j} color={colorArray[i][j]} />
              ))}
            </div>
          ))}
        </div>
        <Button className="px-3 py-2 mt-6 md:px-6" onClick={() => doRefresh(!refresh)}>
          Navigate
        </Button>
      </div>
    </Layout>
  );
};

export default Navigation;
