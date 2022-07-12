
import React from 'react';
import { ClockIcon } from "@heroicons/react/solid";
import { Row, Col, Card, Image, Container } from 'react-bootstrap';
import * as ReactLeaflet from "react-leaflet";
import { icon } from "leaflet";

import Documentation from "components/Documentation";
import MarkerIcon from "assets/img/marker.svg";
import MapboxCreateTokenImg from "assets/img/mapbox-token-create.png";
import markers from "data/mapMarkers";


export default () => {

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} className="p-3">
          <Card>
            <Card.Body>
              <h1 className="h2" id="map">Mapbox</h1>
              <p className="fs-5 fw-light">
                Learn more about integrating Leaflet.js and MapBox with Volt React.
              </p>

              <h2 className="fs-5">Getting started</h2>
              <p>
                In order to get started using the Mapbox integration you will first need to <Card.Link href="https://account.mapbox.com/auth/signup/" target="_blank">create an account on their platform</Card.Link>.
                <br />
                After you finished creating an account, from your main dashboard you will need to create an API key. Click on the <code>+ Create a token</code> button and follow the instructions to generate your API key.
                <br />
                <Image src={MapboxCreateTokenImg} className="my-4" />
              </p>
              <p>
                After you've' succesfully created a token, you will need to update the <code>accessToken</code> property in the map configuration below with your newly generated token.
              </p>

              <Documentation
                title="Example"
                description={
                  <p>Here’s an example of a mapbox component:</p>
                }
                scope={{ ClockIcon, Card, ReactLeaflet, icon, MarkerIcon, markers }}
                example={`const { MapContainer, TileLayer, Marker, Popup } = ReactLeaflet;
                
const mapConfig = {
  maxZoom: 18,
  id: "mapbox/light-v10",
  url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  accessToken: "pk.eyJ1Ijoiem9sdGFudGhlbWVzYmVyZyIsImEiOiJjazZqaWUwcWswYTBvM21td2Jmcm5mYmdyIn0.7_5YCbbOFRnvqZzCNDo9fw"
};

const MapIcon = icon({
  iconUrl: MarkerIcon,
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

render(
  <MapContainer id="mapbox" center={[37.57, -122.26]} zoom={10}>
    <TileLayer {...mapConfig} />

    {markers.map(m => (
      <Marker key={\`map-marker-\${m.id}\`} position={m.latLng} icon={MapIcon}>
        <Popup>
          <Card className="card-article-wide border-0 flex-column no-gutters no-hover">
            <Card.Body className="d-flex flex-column justify-content-between col-12 py-0">
              <h5 className="fw-normal mb-2">{m.name}</h5>
              <div className="d-flex align-items-center">
                <div className="icon icon-xs icon-tertiary me-2">
                  <ClockIcon className="icon icon-xs" />
                </div>
                <div className="font-xs text-dark">{m.date}</div>
              </div>
            </Card.Body>
          </Card>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);`}
              />

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
