import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {MainPage} from "./components/MainPage";
import {Add} from "./elements/Add";
import {Filter} from "./elements/Filter";
import {Route, Routes} from "react-router";

function App() {
    return (
        <>
            <Header/>
            <div className="container">
        <Routes>
        <Route path="/" element={<MainPage/>}>
            <Route path="filter" element={<Filter/>}/>
            <Route path="add" element={<Add/>}/>
        </Route>
        </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
