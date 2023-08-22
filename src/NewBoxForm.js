import React, { useState } from "react";
// import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input id="color" type="text" name="color" value={formData.name} onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input id="height" type="text" name="height" value={formData.name} onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input id="width" type="text" name="width" value={formData.name} onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm;

