import "./goals.css";
export const Goals = () => {
  return (
    <div className="goals">
      <h1 className="title"> Your Fitness Goals</h1>
      <hr />
      <p className="desc">
        Would you like help setting up your goals?{" "}
        <a href="#"> View Guided Setup </a>
      </p>

      <div className="tables">
        <div>
          <div className="table">
            <div className="row">
              <p> Daily Nutrition Goals </p> <button> Edit </button>
            </div>
            <div className="row">
              <p> Calories </p>
              <p> 2200 </p>
            </div>
            <div className="row">
              <p> Carbohydrates</p> <p> 50% </p>
            </div>
            <div className="row">
              <p> Fat </p>
              <p> 30%</p>
            </div>
            <div className="row">
              <p> Protein </p> <p> 20%</p>
            </div>
            <div className="row">
              <p> Custom Daily Goals </p>
              <p>
                <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a>
                No
              </p>
            </div>
          </div>

          <div className="table">
            <div className="row">
              <p> Calories by Meal </p> <button> Edit </button>
            </div>
            <div className="row">
              <p> Breakfast </p>
              <p>
                <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a>
              </p>
            </div>
            <div className="row">
              <p> Lunch</p>
              <p>
                <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a>
              </p>
            </div>
            <div className="row">
              <p> Dinner </p>
              <p>
                <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a>
              </p>
            </div>
            <div className="row">
              <p> Snacks </p>
              <p>
                <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a>
              </p>
            </div>
          </div>

          <div className="table">
            <div className="row">
              <p> Fitness </p> <button> Edit </button>
            </div>
            <div className="row">
              <p> Calories Burned / Week </p>
              <p> 0 Calories </p>
            </div>
            <div className="row">
              <p> Workouts / Week</p> <p> 0 workouts</p>
            </div>
            <div className="row">
              <p> Minutes/Workout	 </p>
              <p> 0 </p>
            </div>
            <div className="row">
              <p> Exercise Calories </p> <p> <a href="/premium">
                  <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
                </a> </p>
            </div>
            <div className="row">
              <p> Custom Daily Goals </p>
              <p>
                <i style={{ color: "#f7941e" }} class="fas fa-lock"></i>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="table">
            <div className="row">
              <p> Micronutrients </p> <button> Edit </button>
            </div>
            <div className="row">
              <p> Saturated Fat </p>
              <p> 24 g </p>
            </div>
            <div className="row">
              <p> Polyunsaturated Fat</p> <p> 0 g </p>
            </div>
            <div className="row">
              <p> Monounsaturated Fat </p>
              <p> 0 g </p>
            </div>
            <div className="row">
              <p> Trans Fat </p> <p> 0 g </p>
            </div>
            <div className="row">
              <p> Cholesterol </p>
              <p>
                300 mg
              </p>
            </div>
            <div className="row">
              <p> Sodium </p>
              <p>
                2300 mg
              </p>
            </div>
            <div className="row">
              <p> Potassium </p>
              <p>
                3500 mg
              </p>
            </div>
            <div className="row">
              <p> Fiber </p>
              <p>
                38 g
              </p>
            </div>
            <div className="row">
              <p> Sugar </p>
              <p>
                83 mg
              </p>
            </div>
            <div className="row">
              <p> Vitamin A </p>
              <p>
                100 %DV 
              </p>
            </div>
            <div className="row">
              <p> Vitamin C </p>
              <p>
                100 %DV 
              </p>
            </div>
            <div className="row">
              <p> Calsium </p>
              <p>
                100 %DV 
              </p>
            </div>
            <div className="row">
              <p> Iron </p>
              <p>
                100 %DV 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
