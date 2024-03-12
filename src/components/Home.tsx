import React, { ReactElement } from "react";
import home from "../images/home.svg";

function Home(): ReactElement {
    return (
        <div className="container">
            <h2 className="title">This is Home</h2>
            <img src={home} alt="home" />
        </div>
    );
}

export default Home;
