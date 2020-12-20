import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import './map.css'
const Map = (state) => {
  const style = {
    width: '100%',
    minHeight: '69vh',
    backgroundColor: '#C4C4C4',
    marginTop: 15,
    marginBottom: 15,
    map: {},
  }

  return (
    <>
      <div style={style}>
        {/* <div className="map"></div> */}
        <MapContainer
          className="map"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default Map
