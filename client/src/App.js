// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import Form from './components/Form.jsx'
import TotalExpense from './components/TotalExpense'
import Details from './components/Details';
import Footer from './components/Footer';
import SampleData from "./data/sample-data.json";
function App() {
  return (
    <div className="App">
        <Header />
        <Form />
        <TotalExpense data={SampleData}/>
        <Details  data={SampleData}/>
        <Footer />
    </div>
  );
}

export default App;
