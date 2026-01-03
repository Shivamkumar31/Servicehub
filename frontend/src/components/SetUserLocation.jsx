import { useNavigate } from "react-router-dom";
import LocationSearch from "./LocationSearch";

const SetUserLocation = ({ onDone }) => {
  const handleSelect = (loc) => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    localStorage.setItem("loggedUser", JSON.stringify({
      ...user,
      searchLat: parseFloat(loc.lat),
      searchLng: parseFloat(loc.lng),
    }));
    onDone?.();
  };

  return <LocationSearch onSelect={handleSelect} />;
};
export default SetUserLocation;