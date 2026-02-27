import { useCallback, useState } from "react";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const initialValue = [
    { text: "learn js", id: 1, isEdited: false, isCompleted: false },
    { text: "learn react", id: 2, isEdited: false, isCompleted: false },
    { text: "learn react-redux", id: 3, isEdited: false, isCompleted: false },
  ];

  const [text, setText] = useState("");
  const [task, setTask] = useState(initialValue);

  const handleTask = () => {
    if (text.trim() === "") return;
    const todo = {
      text: text,
      id: task.length + 1,
      isEdited: false,
      isCompleted: false,
    };

    setTask((prev) => [...prev, todo]);
    setText("");
  };

 /* const handleEdit = useCallback((id) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEdited: true } : item
      )
    );
  }, [task],); */

  const handleDelete = useCallback((id) => {
    setTask((prev) => prev.filter((item) => item.id !== id))
  },[])

  const handleEdit = useCallback((id) => {
    setTask((prev) => 
    prev.map((item) => (item.id === id ? {...item, isEdited:true} : item)),
  );
  },[]);

  // const handleDelete = useCallback((id) => {
  //   setTask((prev) => prev.filter((item) => item.id !== id));
  // }, []);


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleTask}>ADD</button>
      </div>

      {task.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </>
  );
};