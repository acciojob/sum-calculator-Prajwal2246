import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]); // store all inputted numbers
  const [inputValue, setInputValue] = useState(""); // store current input
  const [sum, setSum] = useState(0); // store the running sum

  // Handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new number
  const handleAddNumber = () => {
    const parsedNumber = parseInt(inputValue, 10);
    if (!isNaN(parsedNumber)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsedNumber]);
      setInputValue(""); // clear input
    }
  };

  // Recalculate sum asynchronously whenever numbers change
  useEffect(() => {
    let isCancelled = false;

    const calculateSumAsync = async () => {
      // simulate asynchronous behavior
      await new Promise((resolve) => setTimeout(resolve, 0));

      const total = numbers.reduce((acc, num) => acc + num, 0);
      if (!isCancelled) {
        setSum(total);
      }
    };

    calculateSumAsync();

    return () => {
      isCancelled = true; // cancel if component unmounts
    };
  }, [numbers]);

  // Optional: submit on Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNumber();
    }
  };

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
