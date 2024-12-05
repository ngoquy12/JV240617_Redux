import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  // Lấy dữ liệu từ store
  const { count, random } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Truyền tải thông tin từ UI lên store
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    // Truyền tải thông tin từ UI lên store
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
