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
      setNumbers((prev) => [...prev, parsedNumber]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddNumber();
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSum(numbers.reduce((acc, num) => acc + num, 0));
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add</button>

      <p>
        Sum: {sum}
      </p>
    </div>
  );
};

export default SumCalculator;
