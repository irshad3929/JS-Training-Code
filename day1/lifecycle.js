import React, { useEffect, useState } from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mount");
    
    // Cleanup function for unmounting
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component update when button clicked and count increased");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Lifecycle;







import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Effect 1 - Count has changed:", count);
  }, [count]);

  useEffect(() => {
    console.log("Effect 2 - Data has changed:", data);
  }, [data]);

  useEffect(() => {
    console.log("Effect 3 - Count and Data has changed:", count, data);
  }, [count, data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setData("New Data")}>Change Data</button>
    </div>
  );
};

//export default MyComponent;

