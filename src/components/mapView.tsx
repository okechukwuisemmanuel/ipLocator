import { Map, GoogleApiWrapper, IMapProps } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};
const MapView = (props: IMapProps | Readonly<IMapProps>) => {
  return (
    <section>
      <Map
        google={props.google}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: " YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE ",
})(MapView);
