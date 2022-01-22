import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Food.css";

export const Food = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

useEffect(()=>{
getData();
},[])

  let { name } = useParams();

  const getData = () => {
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${name}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "ebf43f547dmsh0c0e3466a2763d8p19bf4ajsnd8cd87288f72",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };

 const handleSearch =() => {
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${text}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
          "x-rapidapi-key": "ebf43f547dmsh0c0e3466a2763d8p19bf4ajsnd8cd87288f72",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setData(response.hits);
        })
        .catch((err) => {
          console.error(err);
        });
 } 

console.log("Data:",data);
  return (
    <div id="food_container">
      <input
        type="text"
        id="food_Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for a food, brand, or restaurant"
      />
      <button onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
      
      <img id="noDataImg" src="https://www.myfitnesspal.com/react-static/e95f17aa29d83b7a7588a0f825f7b66f.svg" alt="" />   
    </div>
  );
};
