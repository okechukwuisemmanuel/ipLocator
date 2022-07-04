import { LatLngExpression } from "leaflet";
import { useRef, useEffect, useContext, useState } from "react";
import { Marker as Mark, Popup, Tooltip, useMap } from "react-leaflet";
import ipAddressContext from "../context/context";

function Marker(props: {
  position: LatLngExpression;
  setPosition: (e: [number, number]) => void;
}) {
  const { value } = useContext(ipAddressContext);
  const mapRef = useRef(false);
  const [tooltip, setTooltip] = useState("");
  const Map = useMap();
  useEffect(() => {
    const baseURL = `https://geo.ipify.org/api/v1?apiKey= ${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${value}`;
    if (mapRef.current) {
      fetch(baseURL)
        .then((res) => res.json())
        .then((json) => {
          props.setPosition([json.location.lat, json.location.lng]);
          setTooltip(json.location.country);
          Map.flyTo([json.location.lat, json.location.lng], 10);
        });
    } else {
      mapRef.current = true;
    }
  }, [value]);
  return (
    <Mark position={props.position}>
      <Popup>You are here</Popup>
      <Tooltip permanent position={props.position}>
        {tooltip}
      </Tooltip>
    </Mark>
  );
}

export default Marker;
