import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";  
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
  const INITIAL_STATE = [
    // { id: uuid(), color: "blue", height: "200", width: "200" }
  ]

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid()}])
  }

  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }
  return (
    <div>
      <h1>BOXES!!!!</h1>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(({ id, color, width, height}) => <Box key={id} id={id} color={color} width={width} height={height} handleRemove={remove} />)}
      </div>
    </div>
  )
}

export default BoxList;