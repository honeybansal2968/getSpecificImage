import React, { useEffect, useState } from 'react'
import FruitList from './FruitList';
import Items from './Items';
export default function App() {
  const [images, setImages] = useState([]);
  const links = FruitList.map(
    (fruit) =>
      `https://api.unsplash.com/search/photos/?client_id=cXY80-dT6ozPY1O0Y-7I5M9n2czsm3AzzT5y-ILszk0&query=${fruit.fruitName}`
  );
  useEffect(() => {
    (async () => {
      const urls = await Promise.all(
        links.map((url) =>
          fetch(url)
            .then((res) => res.json())
            .then((data) => data.results[0].urls.regular)
        )
      );
      setImages(urls);
    })();
  }, [links]);
  return (
    <div className="item_container">
      {images.map((image, idx) => (
        <Items photo={image} index={idx} />
      ))}
    </div>
  );
}