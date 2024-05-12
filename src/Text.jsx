import React, { useState } from 'react';
import { Button, Grid } from 'antd';

const { Row, Col } = Grid;

const GridComponent = () => {
  const [items, setItems] = useState([]);

  const handleAddBlock = () => {
    // Create a new div block with some content
    const newItem = <div key={items.length} className="block">New Block</div>;
    // Update the state to add the new block
    setItems([...items, newItem]);
  };

  return (
    <div>
      <Button onClick={handleAddBlock}>Add Block</Button>
      <Row gutter={[16, 16]}>
        {/* Render existing div blocks */}
        {items.map((item, index) => (
          <Col span={6} key={index}>
            {item}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GridComponent;
