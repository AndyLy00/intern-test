import React from "react";
import Filter from "./components/Filter";
import ObjectAndDelete from "./components/ObjectAndDelete";
import Post from "./components/Post";


function App() {

    return (
        <div className="main_container">
            <div style={{textAlign: "center", fontSize: "30px", margin: "30px"}}>React Intern Test</div>
            <Filter/>
            <Post/>
            <ObjectAndDelete/>
        </div>

    );
}

export default App;
