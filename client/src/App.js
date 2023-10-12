// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import TotalExpense from "./components/TotalExpense";
import Details from "./components/Details";
import Footer from "./components/Footer";
import SampleData from "./data/sample-data.json";
import { useState } from "react";
import SunsetAPI from "./components/SunsetAPI/SunsetAPI";
function App() {
  const [dataHold, setDataHold] = useState(SampleData);

  const handleAdd = (values) => {
    console.log(values);
    setDataHold((previousData) => [...previousData, values]);
  };

  return (
    <div className="App">
      <Header />
      <SunsetAPI />
      <Form data={dataHold} setDataHold={handleAdd} />
      <TotalExpense data={dataHold} setDataHold={setDataHold} />
      <Details data={dataHold} setDataHold={setDataHold} />
      <Footer />
    </div>
  );
}

export default App;
