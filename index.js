const employee = {
    name: "mano",
    streetAddress: "30200 Kitale Nairobi",
  };
  
  const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
      ...employee,
      [key]: value,
    };
  };
  
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  
  const deleteFromEmployeeByKey = (employee, key) => {
    const updatedEmployeeDetails = {
      ...employee,
    };
    delete updatedEmployeeDetails[key];
    return updatedEmployeeDetails;
  };
  
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
  };