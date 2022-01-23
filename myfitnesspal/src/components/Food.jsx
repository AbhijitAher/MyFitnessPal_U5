import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Food.css";

export const Food = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

useEffect(()=>{
getData();
},[])

console.log(data.length)

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
      <button id="foodSearchBtn" onClick={handleSearch}>
        <i className="fas fa-search"></i> 
      </button>

      <div id={data.length===0 ? "noDataDiv" : "dataDiv"}>
      <img id="noDataImg" src="https://www.myfitnesspal.com/react-static/e95f17aa29d83b7a7588a0f825f7b66f.svg" alt="" />
      <h5>Food Analysis</h5>
      <p>Understand how the food you’re eating contributes to your daily calories, macronutrients, and micronutrients.</p>   
      </div>
        
      <div id={data.length !== 0 ? "food_search_data_div" : "no_food_search_data_div"}>
      {data.map((e,i) => (
        <div key={i} className="food_search_result_div">
          <div className="food_search_result_div_sec_1">
          <h5>{data[i].recipe.label}</h5>
          <div>

          
          <p>Calories : {Math.floor(data[i].recipe.calories)}</p>

          <div>
          <li>Fat : {Math.floor(data[i].recipe.digest[0].total)} mg</li>
          <li>Carbs : {Math.floor(data[i].recipe.digest[1].total)} mg</li>
          <li>Protein : {Math.floor(data[i].recipe.digest[2].total)} mg</li>
          </div>
          </div>
          </div>
          <div className="calories_circle"> {Math.floor(data[i].recipe.calories)} </div>
        </div>
      ))} 
      </div> 


      <div id="home_body_5">
        <div id="home_body_5_sec1">
          <h2>Recipes & Inspiration</h2>
        </div>
        <div id="food_body_1">
          
          <a href="https://blog.myfitnesspal.com/1200-calories-looks-like-infographic?utm_source=mfp&utm_medium=app_homepage">
            <div>
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalories-look-like.ccfc01e7.png&w=640&q=75"
                alt=""
              />
              <h3 className="linkHead">
                What the 1,200-Calorie Diet Looks Like
              </h3>
              <p className="blog_p">MyFitnessPal Blog</p>
            </div>
          </a>
          <a href="https://blog.myfitnesspal.com/essential-guide-to-movement-activity/">
            <div>
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.deb62de2.png&w=640&q=75"
                alt=""
              />
              <h3 className="linkHead">Essential Guide to Getting Moving</h3>
              <p className="blog_p">MyFitnessPal Blog</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
