import React from "react";
import Filter from "./components/Filter";
import ObjectAndDelete from "./components/ObjectAndDelete";
import Post from "./components/Post";


function App() {
    // const fortmatResponse = (res: { status: string | number; headers: AxiosResponseHeaders | Partial<Record<string, string> & { "set-cookie"?: string[] | undefined; }>; data: any; statusText?: string; }) => {
    //   return JSON.stringify(res, null, 2);
    // };
    return (
        <>
            <div style={{textAlign: "center", fontSize: "30px", margin: "30px"}}>React Intern Test</div>
            <Filter/>
            <Post/>
            <ObjectAndDelete/>
        </>

    );
}

export default App;
