let locations = [];

export const getLocations = () => {
  return fetch("http://localhost:3000/locations")
    .then(res => {
      return res.json();
    })
    .then(parsedLocations => {
      return (locations = parsedLocations);
    });
};

export const useLocations = () => {
  return locations.slice();
};