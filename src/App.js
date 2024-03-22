import { Col, Row, Slider, Typography } from "antd";
import Header from "./Header/Header";
import _Table from "./Table/Table";
import { useState } from "react";

function App() {
  const [rows, setRows] = useState(10)

  return (
    <div className="App">
      <Header/>
      <Row>
        <Col xs={24} md={{span: 12, offset:6}}>
         <Typography.Title level ={4}>Bilderanzahl pro Seite:</Typography.Title>  
         <Slider min={1} max={20} defaultValue={rows} onChange={setRows}/>
         <_Table rows={rows}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
