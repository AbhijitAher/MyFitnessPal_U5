export const AppDiv = ({ data }) => {
  return (
    <div className="appDiv">
      <div className="appImg">
        <img src={data.img} alt="appImage" />
      </div>

      <div className="apDetails">
        <p>{data.name}</p>
        <p> {data.type}</p>
        <a href={data.link}> {data.type === "Wearables" ? "CONNECT" : "GET"}</a>
      </div>
    </div>
  );
};
