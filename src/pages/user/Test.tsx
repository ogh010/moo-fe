import { useEffect, useState } from "react";
import { fetchUserPost } from "../../features/user/api/fetchUserPost";
import type { Post } from "../../features/user/model/types";
import { useStore } from "../../entities/user/model/userStore";
import { Link } from "react-router-dom";

const Test = () => {
  const [test, setTest] = useState<Array<Post>>([]);
  useEffect(() => {
    const test = async () => {
      const result = await fetchUserPost();
      setTest(result);
      // 로컬스토리지 확인
      console.log("zustand persist", localStorage.getItem("test"));
    };
    test();
  }, []);

  const { count, increase } = useStore();
  return (
    <div>
      <h1>Test</h1>
      <p>{count}</p>
      <button onClick={increase}>one up</button>
      <Link to={"/join"}>zustand 확인해보기</Link>
      {test.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Test;
