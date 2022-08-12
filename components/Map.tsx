import { GoogleMap, Marker } from '@react-google-maps/api'
import { Map } from 'interfaces/Map'
import { formatGeocoordinates } from 'utils/formatGeocoordinates'

const center = {
  lat: 28.4811732,
  lng: -81.3426652,
}

const Map = ({ communities }: Map) => {
  const handleLoad = (map: any) => {
    if (!communities) return

    const bounds = new google.maps.LatLngBounds()

    communities?.forEach((community) =>
      bounds.extend(formatGeocoordinates(community.address))
    )

    map.fitBounds(bounds)
  }

  return (
    <>
      {communities && (
        <GoogleMap
          center={center}
          zoom={8}
          mapContainerClassName="w-full h-full"
          onLoad={handleLoad}
        >
          {communities.map((community) => (
            <Marker
              key={community._id}
              position={formatGeocoordinates(community.address)}
            />
          ))}
        </GoogleMap>
      )}
    </>
  )
}

export default Map
