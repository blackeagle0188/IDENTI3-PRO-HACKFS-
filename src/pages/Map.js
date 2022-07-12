import React from "react";
import { useHistory } from "react-router-dom";
import { ClockIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { Card, Button, Breadcrumb } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import { Routes } from "routes";
import markers from "data/mapMarkers";

const mapConfig = {
  maxZoom: 18,
  id: "mapbox/light-v10",
  url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  accessToken: "pk.eyJ1Ijoiem9sdGFudGhlbWVzYmVyZyIsImEiOiJjazZqaWUwcWswYTBvM21td2Jmcm5mYmdyIn0.7_5YCbbOFRnvqZzCNDo9fw"
};

const MapIcon = icon({
  iconUrl: require('../assets/img/marker.svg'),
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default () => {
  const history = useHistory();

  const goToMapDpcs = () => {
    history.push(Routes.PluginMap.path);
  };

  return (
    <>
      <div className="py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><HomeIcon className="icon icon-xs" /></Breadcrumb.Item>
            <Breadcrumb.Item>Volt</Breadcrumb.Item>
            <Breadcrumb.Item active>MapBox</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex justify-content-between w-100 flex-wrap">
          <div className="mb-3 mb-lg-0">
            <h4>MapBox (Leaflet.js)</h4>
            <p className="mb-0">
              Dozens of reusable components built to provide buttons, alerts, popovers, and more.
            </p>
          </div>
          <div>
            <Button variant="outline-gray-600" className="d-inline-flex align-items-center" onClick={goToMapDpcs}>
              <QuestionMarkCircleIcon className="icon icon-xs me-1" /> MapBox Docs
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <MapContainer id="mapbox" className="p-4" center={[37.57, -122.26]} zoom={10}>
          <TileLayer {...mapConfig} />

          {markers.map(m => (
            <Marker key={`map-marker-${m.id}`} position={m.latLng} icon={MapIcon}>
              <Popup>
                <Card className="card-article-wide border-0 flex-column no-gutters no-hover">
                  <Card.Body className="py-0 d-flex flex-column justify-content-between col-12">
                    <h5 className="fw-normal mb-2">{m.name}</h5>
                    <div className="d-flex align-items-center">
                      <ClockIcon className="icon icon-xs icon-tertiary me-2" />
                      <div className="font-xs text-dark">{m.date}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Card>
    </>
  );
};
