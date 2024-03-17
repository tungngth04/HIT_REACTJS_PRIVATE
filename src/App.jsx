// import Header from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import Section from './components/Section/Section'
// import Footer from './components/Footer/Footer';
import "./App.css";
import data from "./data/posts.json";
import Cardtable from "./components/cardtable/Cardtable";
import ButtonToggle from "./components/buttonToggle/Buttontoggle";

function App() {
  return (
    <>
      <ButtonToggle></ButtonToggle>
      <Cardtable posts={data}></Cardtable>
    </>
  );
}

export default App;
