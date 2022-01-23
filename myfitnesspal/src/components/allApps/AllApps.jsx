import { useEffect, useState } from "react";
import { AppDiv } from "./App_Div";
import { Slider } from "./Slider";

import "./allApps.css";

export const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [filtApps, setFultApps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allapps")
      .then((data) => data.json())
      .then((d) => {
        setApps(d);
        setFultApps(d);
      });
  }, []);

  const filter = (type) => {
    if (type === "all") {
      return setFultApps(apps);
    }

    let newList = apps.filter((app) => {
      return app.type === type;
    });

    setFultApps(newList);
  };

  return (
    <>
      <div className="App2">
        <div>
          <Slider />
          <h2 className="apps_title">App Marketplace</h2>
          <hr />
          <div className="allApps">
            {filtApps.map((app, id) => {
              return <AppDiv key={id} data={app} />;
            })}
          </div>
        </div>
        <div className="categories">
          <h2 className="cat_title"> Categories </h2>
          <ul>
            <li onClick={() => filter("all")}> All </li>
            <li onClick={() => filter("Activity Traker")}> Activity Traker </li>
            <li onClick={() => filter("Step Traker")}> Step Traker </li>
            <li onClick={() => filter("Scales")}> Scales </li>
            <li onClick={() => filter("Lifestyle")}> Lifestyle </li>
            <li onClick={() => filter("Wearables")}> Wearables </li>
            <li onClick={() => filter("Fitness App")}> Fitness Apps </li>
            <li onClick={() => filter("Exercise Equipments")}>
              {" "}
              Exercise Equipments{" "}
            </li>
            <li onClick={() => filter("Fertility")}> Fertility </li>
          </ul>
        </div>
      </div>
    </>
  );
};
