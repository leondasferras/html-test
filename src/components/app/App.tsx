import Header from "../header/Header";
import CardsSection from "../cards-section/CardsSection";
import ColoredSection from "../coloredSection/ColoredSection";
import Slider from "../slider/Slider";
import Main from "../main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <CardsSection />
        <ColoredSection/>
        <Slider/>
      </Main>
    </>
  );
}

export default App;
