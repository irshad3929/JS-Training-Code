import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, Setcount] = useState(0);

  useEffect(() => {
    console.log("component mount");

    return () => {
      console.log("clean up code/ component will unmount");
    };
  }, []); //empty dependency means it render only once

  useEffect(() => {
    console.log("component update");
  }, [count]);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => Setcount(count + 1)}> Increment </button>
    </div>
  );
};

export default Lifecycle;




