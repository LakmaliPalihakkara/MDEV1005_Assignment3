import "./Recipies.css";
import { useState, useEffect } from "react";
import CardComponent from "./Card";
import Sidenav from "./Sidenav";

function Recipies() {
  const [apidata, setApidata] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const APP_ID = "3da7e896";
  const APP_KEY = "8fd4ccf4c93f22a7c602937ecc48dbc1";
  const APILINK = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    // console.log("boom boom");
    getData();
  }, [query]);

  const getData = async () => {
    const data = await fetch(APILINK); //to pull data from api
    const jsondata = await data.json(); //data from api data in json format
    //console.log(jsondata.hits);
    // console.log(jsondata);
    setApidata(jsondata.hits);
  };

  const searchfun = (e) => {
    setSearch(e.target.value);
  };
  const queryFun = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="app">
      <Sidenav />
      <div className="cardsContainer">
        <form onSubmit={queryFun}>
          <input type="text" value={search} onChange={searchfun} />
          <button type="submit">search</button>
          {apidata &&
            apidata.map((record) => (
              <CardComponent
                key={record.recipe.label}
                t={record.recipe.label}
                cal={record.recipe.calories}
                img={record.recipe.image}
              />
            ))}
        </form>
      </div>
    </div>
  );
}

export default Recipies;
