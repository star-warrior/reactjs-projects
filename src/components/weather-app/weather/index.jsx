export default function Weather({ data }) {
  function getCuurentDate() {
    return new Date().toLocaleDateString("en-us");
  }

  return (
    <div className="weather">
      {data ? (
        <div>
          <div className="city-name">
            <h2>
              {data.name}, <span>{data.sys.country}</span>
            </h2>
          </div>
          <div className="current-data">
            <span> {getCuurentDate()} </span>
          </div>
          <div className="city-weather"></div>
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
}
