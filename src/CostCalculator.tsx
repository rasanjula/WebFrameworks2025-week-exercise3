import React, { useState } from "react";

type CostCalculatorProps = {
  priceOfSingleVMPerHour: number;
};

const CostCalculator: React.FC<CostCalculatorProps> = ({ priceOfSingleVMPerHour }) => {
  const [vmCount, setVmCount] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setVmCount(value);
    } else {
      setVmCount(0);
    }
  };

  const costPerHour = vmCount * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30; // 30-day month
  const costPerYear = costPerDay * 365; //  365 days in a year

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmCount}
        onChange={handleChange}
      />
      <div>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </div>
  );
};

export default CostCalculator;