import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ApiLoader from "@/shared/ui/ApiLoader";

export default function App() {
  return (
    <div>
      <ApiLoader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
