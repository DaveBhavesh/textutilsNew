import React, {useState} from 'react'

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    console.log("Upper was Clicked");
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To Upper Case !","success");
  }

  const handleLowClick = ()=>{
    console.log("Lower was Clicked");
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted To Lower Case !","success");
  }

  
  const handleClearClick = ()=>{
    console.log("Clear Text Clicked");
    setText('')
    props.showAlert("Text Cleared !","success");
  }

  const handleCopyClick = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied !","success");
  }

  const handleOnChange =(event)=>{
    console.log("OnChange");
    setText(event.target.value)
  }


  const [text,setText]=useState('');

  return (
<div>

<div  className=" container mb-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
  <h1>{props.heading}</h1>
  <div className='mb-3'>
  <textarea className="form-control" id="myBox" rows="5" style={{color: props.mode==='dark'? 'white':'#042743', backgroundColor: props.mode==='dark'?'#04032b ':'white'}} value={text} onChange={handleOnChange}></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
</div>  

<div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
  <h2>Your Text Summary</h2>
  <p>You have {text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} characters : </p>
  <p>Needs {0.008*text.split(" ").length } minutes time to read.</p>
</div>
</div>
  )
}
