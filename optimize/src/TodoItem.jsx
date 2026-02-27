import { useMemo } from "react";

const expensiveFunction = (ms) => {
  const start = Date.now();

  // simulate heavy calculation
  while (Date.now() - start < ms) {
    continue;
  }

  return true;
};

export const TodoItem = ({id,text,isEdited,handleDelete, handleEdit,}) => {

  useMemo(() => expensiveFunction(200),[]); 

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h3>{id}</h3>
      <h4>{text}</h4>
      <h5>{isEdited ? "true" : "false"}</h5>

      <button onClick={() => handleEdit(id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;




// export default memo(Todo_Items, shallowCheck);

/* 

prv.id === curr.id
prv.text === curr.text
prv.handleDelete[func] === curr.handleDelete[func]


*/