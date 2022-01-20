import "./Homepage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <div id="home_top_div">
        <div id="home_head_div">
          <h1 className="home_main_head">Fitness starts with what you eat.</h1>
          <p>
            Take control of your goals. Track calories, break down ingredients,
            and log activities with MyFitnessPal.
          </p>
          <Link to="/signup">
            {" "}
            <button>START FOR FREE</button>{" "}
          </Link>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div id="home_body_1">
        <div id="lineDiv"></div>
        <div id="home_body_1_2">
          <h1>Search over 11 million foods in our database.</h1>
          <p>
            What's in your food? Learn about calorie count, nutrition
            information and serving size.
          </p>
        </div>
      </div>
      <div id="home_body_2">
        <input
          id="home_input_box"
          type="text"
          placeholder="Get the nutrition for any food, like an apple"
        />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div id="home_body_3">
        <div id="home_body_3_sec1">
          <h2>The Tools for Your Goals</h2>
          <p>
            Trying to lose weight, tone up, lower your BMI, or invest in your
            overall health? We give you the right features to hit your goals.
          </p>
        </div>
        <div id="home_body_3_sec2">
          <div>
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiary.e6e4c438.svg&w=96&q=75"
              alt=""
            />
            <h3>Learn. Track. Improve.</h3>
            <p>
              Keeping a food diary helps you understand your habits and
              increases your likelihood of hitting your goals.
            </p>
          </div>
          <div>
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbarcode.18277ae4.svg&w=96&q=75"
              alt=""
            />
            <h3>Logging Simplified</h3>
            <p>
              Scan barcodes, save meals and recipes, and use Quick Tools for
              fast and easy food tracking.
            </p>
          </div>
          <div>
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshoeblue.28e2684f.svg&w=96&q=75"
              alt=""
            />
            <h3>Stay Motivated</h3>
            <p>
              Join the World’s Largest Fitness Community for advice, tips, and
              support 24/7.
            </p>
          </div>
        </div>
        <Link to="/signup">
          {" "}
          <button id="start_journey_btn">START YOUR JOURNEY TODAY</button>{" "}
        </Link>
      </div>
      <div id="home_body_4">
        <div id="home_body_4_sec1">
          <h2>Victory Stories</h2>
          <p>
            When you reach your goals, our whole community celebrates with you.
            That’s over 200 million members sharing in your victory—using it to
            inspire their own journey.
          </p>
        </div>
        <div id="home_corousel">
          <img src="./Images/homepage/corousel.jpg" alt="" />
        </div>
      </div>
      <div id="home_body_5">
        <div id="home_body_5_sec1">
          <h2>Recipes & Inspiration</h2>
          <p>
            Get nutritionist-approved recipes and motivational workout tips from
            MyFitnessPal experts.
          </p>
        </div>
        <div id="home_body_5_sec2">
          <a href="https://blog.myfitnesspal.com/10-make-ahead-breakfasts-under-300-calories?utm_source=mfp&utm_medium=app_homepage">
            <div>
              <img
                src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=640&q=75"
                alt=""
              />
              <h3 className="linkHead">
                15 Make-Ahead Breakfasts Under 300 Calories
              </h3>
              <p className="blog_p">MyFitnessPal Blog</p>
            </div>
          </a>
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
      <div id="home_body_6">
        <div id="home_body_6_sec1">
          <h2>Connect with over 50 apps.</h2>
          <p>
            Easily link your MyFitnessPal account with apps that support your
            healthier lifestyle. It’s not just about calories. It’s about
            feeling better, looking better, and living better.
          </p>
        </div>
        <div id="home_body_6_sec2">
          <img
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75"
            alt=""
          />
        </div>
        <div id="home_body_6_sec3">
          <a href="https://itunes.apple.com/us/app/myfitnesspal/id341232718?mt=8">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconversion-apple-app-store-logo.751bc42c.svg&w=256&q=75"
              alt=""
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android">
            <img
              src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconversion-google-play-store-logo.1c6369a1.svg&w=256&q=75"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
