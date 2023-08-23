import React from "react";

const Box = ({ id, color, width, height, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div className="Box" style={{backgroundColor: `${color || "orange"}`, width: `${width || 100}px`, height: `${height || 100}px`}}></div>
      <button onClick={remove}>Remove The Box!</button>
    </div>
    
  )
}



export default Box;