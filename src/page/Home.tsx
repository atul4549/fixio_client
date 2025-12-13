// import React from 'react'
// import { Navigation } from "../components/Navigation";
import "../App.css";
import { Navigation } from "../components/Navigation";
export const Home = () => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {/* <Navigation /> */}
      <aside>
        <h1>Fixio</h1>
        {/* <button>prime</button> */}
      </aside>
      <article>
        <Navigation/>
        
      </article>
    </div>
  );
};
