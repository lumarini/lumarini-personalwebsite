import Buttons from "./buttons";
import ContainerCenter from "./containerCenter";
import Footer from "./footer";
import "./styles.css";

// import LinearGradient from "react-native-web-linear-gradient";

function App() {
  return (
    <div className="background">
      <ContainerCenter />
      <Buttons />
      <Footer />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
