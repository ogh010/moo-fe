import { useEffect, useState } from "react";
import { fetchUserPost } from "../../features/user/api/fetchUserPost";
import type { Post } from "../../features/user/model/types";

const Test = () => {
  const [test, setTest] = useState<Array<Post>>([]);
  useEffect(() => {
    const test = async () => {
      const result = await fetchUserPost();
      setTest(result);
    };
    test();
  }, []);
  return (
    <div>
      <h1>Test</h1>
      {test.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default Test;
