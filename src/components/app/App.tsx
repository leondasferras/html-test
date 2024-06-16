import "./App.module.css";
import Header from "../header/Header";
import CardsSection from "../cards-section/CardsSection";
import ColoredSection from "../coloredSection/ColoredSection";
import Slider from "../slider/Slider";

function App() {
  return (
    <>
      <Header />
      <main>
        <CardsSection />
        <ColoredSection/>
        <Slider/>
      </main>
    </>
  );
}

export default App;
