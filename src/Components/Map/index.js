import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import './map.css'
import icon from '../../images/marker.png'
const Map = (state) => {
  const style = {
    width: '100%',
    height: '60vh',
    backgroundColor: '#C4C4C4',
    gap: 20,
    map: {},
    gridArea: 'map',
  }

  const myIcon = Leaflet.icon({
    iconUrl: '../../images/marker.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  })

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
          <Marker position={[51.505, -0.09]} Icon={myIcon}>
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
