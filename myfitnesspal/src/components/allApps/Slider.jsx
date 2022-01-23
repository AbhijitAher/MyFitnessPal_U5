import { useEffect, useState } from "react";

export const Slider = () => {
  const [counter, setCounter] = useState(0);

  const imgs = [
    "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_2_10_0_4027.png",
    "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_2_10_0_25954.png",
    "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png",
  ];

  useEffect(() => {
    setInterval(() => {
      setCounter((p) => (p === 2 ? (p = 0) : (p += 1)));
    }, 2000);
  }, []);

  return (
    <div className="slider">
      <img className="sliderimg" src={imgs[counter]} alt="img" />
    </div>
  );
};
