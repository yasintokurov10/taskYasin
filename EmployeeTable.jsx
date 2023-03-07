import React, { useState } from "react";
import "./Table.css";

const EmployeeTable = ({ employees }) => {
  const [employeeDays, setEmployeeDays] = useState(employees.map(() => 0));

  const handleDaysChange = (index, value) => {
    const newDays = [...employeeDays];
    newDays[index] = value;
    setEmployeeDays(newDays);
  };

  const totalSalary = employees.reduce((acc, cur, index) => {
    return acc + cur.salaryPerDay * employeeDays[index];
  }, 0);

  return (
    <div>
      <h2>Task3</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Количество отработанных дней</th>
            <th>Зарплатная ставка за день</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>
                <input
                  type="number"
                  value={employeeDays[index]}
                  onChange={(e) => handleDaysChange(index, e.target.value)}
                />
              </td>
              <td>{employee.salaryPerDay}</td>
              <td>{employee.salaryPerDay * employeeDays[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Суммарная зарплата всех работников: {totalSalary}</p>
    </div>
  );
};

export default EmployeeTable;
