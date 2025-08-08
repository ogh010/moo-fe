import CircularProgress from "@mui/material/CircularProgress";
import { useLoadingStore } from "../model/loadingStore";

const LodingBar = () => {
  const { loading } = useLoadingStore();
  return loading ? (
    <>
      <p>{loading}</p>
      <CircularProgress />
    </>
  ) : null;
};

export default LodingBar;
