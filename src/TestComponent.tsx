import React, { useState } from "react";

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<UserData>({ id: 1, name: "kaito" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputData(e.target.value);
  const hanleClick = () => setCount(count + 1);
  return (
    <div>
      <h1>{props.text}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <div className="button">
        <input type="button" onClick={hanleClick} value={count} />
      </div>
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;
