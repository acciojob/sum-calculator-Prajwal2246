import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const parsedNumber = parseInt(inputValue, 10);
    if (!isNaN(parsedNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedNumber]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddNumber();
  };

  // Asynchronous sum calculation using setTimeout
  useEffect(() => {
    let isCancelled = false;
    const timeoutId = setTimeout(() => {
      if (!isCancelled) {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }
    }, 0);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [numbers]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a number"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleAddNumber} style={{ padding: "5px 10px" }}>
        Add
      </button>
      <div style={{ marginTop: "20px" }}>
        <strong>Numbers:</strong> {numbers.join(", ")}
      </div>
      <div style={{ marginTop: "10px" }}>
        <strong>Total Sum:</strong> {sum}
      </div>
    </div>
  );
};

export default SumCalculator;
