import { Outlet } from "react-router-dom";
import LodingBar from "../../shared/ui/LodingBar";

interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <div>header</div>
      <LodingBar />
      <Outlet />
      <div>footer</div>
    </div>
  );
}
