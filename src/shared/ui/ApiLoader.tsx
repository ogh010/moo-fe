import CircularProgress from "@mui/material/CircularProgress";
import { useLoadingStore } from "../model/loadingStore";

const ApiLoader = () => {
  const { loading } = useLoadingStore();

  console.log("로딩 상태:", loading); // 디버깅용

  if (!loading) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        color: "white",
      }}
    >
      <CircularProgress size={60} color="primary" />
      <h1>처리중...</h1>
    </div>
  );
};

export default ApiLoader;
