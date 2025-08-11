import { Outlet } from "react-router-dom";
import LodingBar from "../../shared/ui/ApiLoader";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Header />
      <LodingBar />
      <Outlet />
      <Footer />
    </div>
  );
}
