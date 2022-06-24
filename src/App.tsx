import "./sass/base.scss";
import Header from "./components/header";
import MapView from "./components/mapView";

function App() {
  return (
    <>
      <Header />
      <main>
        <MapView />
      </main>
    </>
  );
}

export default App;
