
import { Routes, Route } from "react-router-dom";
import Home from "./routes/pages/Home";
import AllVenues from "./routes/pages/AllVenues";
import AddVenue from "./routes/pages/AddVenue";
import VenueSummaryPage from "./routes/pages/VenueSummaryPage";

function AppRouter() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/AllVenues" element={<AllVenues />} />
        <Route exact path="/AddVenue" element={<AddVenue />} />
        <Route
          exact
          path="/VenueSummary/:name/:id"
          element={<VenueSummaryPage id />}
        />
      </Routes>
    
  );
}
export default AppRouter;
// call get all venues in router
