import React, { useState } from 'react';
import { Button, Input } from 'antd';
import './Add.css'; // Import Ant Design CSS

function DynamicTextAreas() {
  const [textAreas, setTextAreas] = useState(['']); // State to hold text areas

  // Function to handle adding a new text area
  const addTextArea = () => {
    setTextAreas([...textAreas, '']);
  };

  // Function to handle change in text area value
  const handleTextAreaChange = (index, event) => {
    const newTextAreas = [...textAreas];
    newTextAreas[index] = event.target.value;
    setTextAreas(newTextAreas);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button onClick={addTextArea}>Add Text Area</Button>

      {textAreas.map((value, index) => (
        <Input.TextArea
          key={index}
          value={value}
          onChange={(event) => handleTextAreaChange(index, event)}
          style={{ marginBottom: '10px', height: '100px' }} // Fixed height for TextArea
        />
      ))}
    </div>
  );
}

export default DynamicTextAreas;
