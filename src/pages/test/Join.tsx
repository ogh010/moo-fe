import { useStore } from "@/entities/user/model/userStore";

function Join() {
  const { count } = useStore();
  return (
    <div>
      <h1>join</h1>
      <p>{count}</p>
    </div>
  );
}

export default Join;
