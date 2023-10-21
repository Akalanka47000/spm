export default function Box({ color }) {
  if (color === 'gray') return <div className="w-10 h-10 bg-gray-500 border border-black"></div>;
  else if (color === 'green') return <div className="w-10 h-10 bg-green-300 border border-black"></div>;
  else if (color === 'yellow') return <div className="w-10 h-10 bg-yellow-200 border border-black"></div>;
  else if (color === 'white') return <div className="w-10 h-10 bg-white border border-black"></div>;
  else return null;
}
