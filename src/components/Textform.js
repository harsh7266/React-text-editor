import React from "react";
import { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("enter text here");

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleupclick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('converted to uppercase','Sucess')
  };

  const handleloclick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleclearclick = () => {
    let newText = "";
    setText(newText);
  };

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading} </h1>
        <div classname="mb-3" >
          <textarea
            className="form-control"
            value={Text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "midnightblue",color:props.mode==='light'?'black':'white'
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleupclick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleloclick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclearclick}>
          clear text
        </button>
      </div>

      <div classname="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>your text summary</h1>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
        <p>{Text.length} characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
