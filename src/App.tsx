import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import Registration from "./pages/Registration";
import ComingSoon from "./pages/ComingSoon";
import DareGossipBox from "./pages/DareGossip";
import ProtectedRoute from "./routes/ProtectedRoutes";
import SpinnerPage from "./pages/Spinner";
import SpinnerLogin from "./pages/SpinnerLogin";


export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/team" element={<Team />} />
                    <Route
                        path="/coming-soon"
                        element={
                            <ComingSoon
                                title="Something exciting is on the way"
                                text={"We're putting the final touches on an experience you'll love. Stay tuned."}
                            />
                        }
                    />
                    <Route path="/dare-gossip" element={<DareGossipBox />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/spinner-login" element={<SpinnerLogin />} />
                    <Route path="/spinner" element={<ProtectedRoute><SpinnerPage /></ProtectedRoute>} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </BrowserRouter>
        )}
;