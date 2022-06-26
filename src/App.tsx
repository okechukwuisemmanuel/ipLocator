import "./sass/base.scss";
import Header from "./components/header";
import MapView from "./components/mapView";
import { IpaddressProvider } from "./context/context";

function App() {
  return (
    <IpaddressProvider>
      <Header />
      <main>
        <MapView />
      </main>
    </IpaddressProvider>
  );
}

export default App;
