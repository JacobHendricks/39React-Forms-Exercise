import React from "react";

const Box = ({ id, color = "orange", width = 40, height = 40, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div className="Box" style={{backgroundColor: `${color}`, width: `${width}px`, height: `${height}px`}}></div>
      <button onClick={remove}>Remove The Box!</button>
    </div>
    
  )
}



export default Box;