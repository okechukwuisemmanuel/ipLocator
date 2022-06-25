import "./sass/base.scss";
import Header from "./components/header";
import MapView from "./components/mapView";
import { IpaddressProvider } from "./context/context";
import Twest from "./components/test";

function App() {
  return (
    <IpaddressProvider>
      <Header />
      <main>
        {/* <MapView /> */}
        <Twest />
      </main>
    </IpaddressProvider>
  );
}

export default App;
