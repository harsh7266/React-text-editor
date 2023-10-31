import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { useState } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "midnightblue";
      showAlert("darkmode has been enabled", "sucess");
      document.title = "text editor-darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("lightmode has been enabled", "sucess");
      document.title = "text editor-lightmode";
    }
  };


    return (
    <>
      <BrowserRouter>
        <Navbar
          title="TEXT EDITOR"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" >
          <Routes>
            <Route exact path="/About" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text to analyze "  mode={mode}/>} ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );

}
export default App;



