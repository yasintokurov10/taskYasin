import React from "react";
import Counter from "./products/Counter";
import Paragraph from "./products/Paragraph/Paragraph";
import EmployeeTable from "./products/Task3/EmployeeTable";

const employees = [
  { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
  { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
  { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
  { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
  { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
  { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
  { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
  { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
  { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
  { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },

  { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
];
const App = () => {
  return (
    <>
      <Counter />
      <Paragraph />
      <EmployeeTable employees={employees} />
    </>
  );
};

export default App;
