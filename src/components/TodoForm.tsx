import React, {
  // useState
  useRef,
} from "react";

interface TodoFormProps {
  onAdd(todo: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  // export const TodoForm: React.FC<{ onAdd(todo: string): void }> = (props) => {
  //   const [val, setVal] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setVal(event.target.value);
  //   };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("-----", ref.current?.value);
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
      //   setVal("");
    }
  };

  return (
    <div className="input-field col s6">
      <input
        placeholder="Placeholder"
        id="first_name"
        type="text"
        className="validate"
        // value={val}
        // onChange={changeHandler}
        ref={ref}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="first_name" className="active">
        Enter your todo
      </label>

      {/* <p>!!! --- {val}</p> */}
    </div>
  );
};
