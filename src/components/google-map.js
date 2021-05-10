import React from "react"

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends React.Component {
  render() {
    return (
      <div style={{ width: `33vw` }}>
        <Map google={this.props.google} zoom={14} style={this.props.style}>
          {/* <Marker onClick={this.onMarkerClick} name={"Current location"} /> */}
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow> */}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_API_KEY,
})(MapContainer)
