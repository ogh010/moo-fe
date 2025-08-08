import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function GlovbalErrorPage() {
  const error = useRouteError();
  return (
    <>
      {isRouteErrorResponse(error) ? (
        <div>
          <h1>{error.status} 에러</h1>
          <p>{error.statusText}</p>
        </div>
      ) : (
        <div>
          <h1>알 수 없는 에러 발생</h1>
          <p>{(error as Error).message}</p>
        </div>
      )}
    </>
  );
}
