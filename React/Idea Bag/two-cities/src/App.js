import React from 'react';
import AddCity from './components/Cities/AddCity';
// import Map from './components/Map/Map'; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

function App() {
  return (
    <div>
      <AddCity />
      {/* <Map /> */}
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
    </div>
  );
}

// export default App;

export default GoogleApiWrapper({
  apiKey: ("GD2Ucfv_6RaK81f2ZafHWM4fnpdg")
})()
