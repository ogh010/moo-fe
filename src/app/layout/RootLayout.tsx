import { Outlet } from "react-router-dom";
import LodingBar from "../../shared/ui/ApiLoader";

export default function App() {
  return (
    <div>
      <div>header</div>
      <LodingBar />
      <Outlet />
      <div>footer</div>
    </div>
  );
}
