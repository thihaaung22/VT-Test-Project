import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { exportPdf } from "./data/export";
import "./Map.css";

const Map = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER);
  }, []);

  const download = () => {
    exportPdf();
  };

  return (
    <div id="map" style={style}>
      <MapContainer
        center={[16.820286, 96.175137]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <button className="export" onClick={download}>
        Export
      </button>
    </div>
  );
};

export default Map;
