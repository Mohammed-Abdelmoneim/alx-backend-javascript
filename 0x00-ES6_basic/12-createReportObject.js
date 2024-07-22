export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      let num = 0;
      for (const key in employeesList) {
        if (key) {
          num += 1;
        }
      }
      return num;
    },
  };
}
