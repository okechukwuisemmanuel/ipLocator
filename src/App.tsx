import "./sass/base.scss";
import Header from "./components/header";
import MapView from "./components/mapView";
import { InputProvider } from "./context/context";

function App() {
  return (
    <InputProvider>
      <Header />
      <main>
        {/* <MapView /> */}
        hello
      </main>
    </InputProvider>
  );
}

export default App;
