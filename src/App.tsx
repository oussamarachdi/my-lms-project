import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import Registration from "./pages/Registration";
import ComingSoon from "./pages/ComingSoon";
import ComingSoonV2 from "./pages/ComingSoonV2";


export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                    <Route path="/register" element={<ComingSoonV2 />} />
                </Routes>
            </BrowserRouter>
        )}
;