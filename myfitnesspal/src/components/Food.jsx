import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Food.jsx";

export const Food = () => {
    const [text,setText] = useState("")
    
    let {name} = useParams();
    

    const getData = () => {
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=rice`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
		"x-rapidapi-key": "ebf43f547dmsh0c0e3466a2763d8p19bf4ajsnd8cd87288f72"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
    }

    return (
        <div id="food_container">
            <input type="text" id="food_Search" placeholder="Search for a food, brand, or restaurant" />
            <button>
            <i class="fas fa-search"></i>
                </button>  
        </div>

                
    )
}
