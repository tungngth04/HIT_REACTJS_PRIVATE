import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
// import data from "./data/posts.json";
// import Cardtable from "./components/cardtable/Cardtable";
// import ButtonToggle from "./components/buttonToggle/Buttontoggle";
import "./App.scss";
// import HeaderDS from "./components/HeaderDS/HeaderDS";
// import BannerDS from "./components/BannerDS/BannerDS";
// import SectionDS from "./components/SectionDS/SectionDS";
// import FooterDS from "./components/FooterDS/FooterDS";
function App() {
  return (
    <>
      {/* <ButtonToggle></ButtonToggle>
      <Cardtable posts={data}></Cardtable> */}
      {/* <HeaderDS />
      <BannerDS />
      <SectionDS />
      <FooterDS /> */}
      <Header />
      <Banner />
      <Section />
      <Footer />
    </>
  );
}

export default App;
