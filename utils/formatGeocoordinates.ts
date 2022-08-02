export const formatGeocoordinates = (address: any) => {
  const position = {
    lat: address.lat,
    lng: address.lng,
  }

  return position
}
