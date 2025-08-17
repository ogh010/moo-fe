import { useEffect, useState } from "react";
import type { Post } from "@/features/user/model/types";
import { useStore } from "@/entities/user/model/userStore";
import { Link } from "react-router-dom";

const Test = () => {
  const [test, setTest] = useState<Array<Post>>([]);
  useEffect(() => {
    const test = async () => {
      // 로컬스토리지 확인
      console.log("zustand persist", localStorage.getItem("test"));
    };
    test();
  }, []);

  const { count, increase, decrease } = useStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>one up</button>
      <button onClick={decrease}>one down</button>
      <Link to={"/join"}>zustand 확인해보기</Link>
      {test.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Test;
