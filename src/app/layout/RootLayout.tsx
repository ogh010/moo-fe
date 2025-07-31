import { Outlet } from "react-router-dom";

interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <div>
      <div>header</div>
      <Outlet />
      <div>footer</div>
    </div>
  );
}
