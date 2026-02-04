import React, {useState} from 'react'

export default function Calculator(props) {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState("");
    
    const handleClearClick = ()=>{
    console.log("Clear text was clicked");
    setNum1("");
    setNum2("");
    setOperation("");
    setResult("");
    }

const handleCalClick = ()=>{
    console.log(("Calculate was clicked"));
    if (operation === "+") setResult(Number(num1) + Number(num2));
    if (operation === "-") setResult(Number(num1) - Number(num2));
    if (operation === "*") setResult(Number(num1) * Number(num2));
    if (operation === "/") setResult(Number(num1) / Number(num2));
  }

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  }

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  }

  const handleOperationChange = (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case "Addition (+)":
        setOperation("+");
        break;
      case "Subtraction (-)":
        setOperation("-");
        break;
      case "Multiplication (*)":
        setOperation("*");
        break;
      case "Division (/)":
        setOperation("/");
        break;
      default:
        setOperation("");
    }
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{props.title}</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="mb-3">
            <label className="form-label">{props.mylabel}</label>
            <input value={num1} onChange={handleNum1Change} type="number" className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">{props.mylabel1}</label>
            <input value={num2} onChange={handleNum2Change} type="number" className="form-control"/>
          </div>
          <div className="mb-3">
            <label className="form-label">{props.mylabel2}</label>
            <select value={
              operation === "+" ? "Addition (+)" :
              operation === "-" ? "Subtraction (-)" :
              operation === "*" ? "Multiplication (*)" :
              operation === "/" ? "Division (/)" : ""
            } onChange={handleOperationChange} className="form-select">
              <option></option>
              <option>Addition (+)</option>
              <option>Subtraction (-)</option>
              <option>Multiplication (*)</option>
              <option>Division (/)</option>
            </select>
          </div>
          {result !== "" && (
            <div className="mb-3">
              <label className="form-label">Result</label>
              <input value={result} type="number" className="form-control" readOnly/>
            </div>
          )}

        </div>
      </div>

      <div className="row justify-content-center mt-3">
      <div className="col-auto">
    <button onClick={handleCalClick}type="button" className="btn btn-success">{props.cal}</button>
  </div>

  <div className="col-auto">
    <button type="button" className="btn btn-success" onClick={handleClearClick}>{props.clear}</button>
  </div>

</div>

    </div>
  );
}
