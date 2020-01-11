import { useEmployees } from "../employees/EmployeeProvider.js";
import { useComputers } from "../computers/ComputerProvider.js";
import Employee from "./Employee.js";
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";
import { useCustomers } from "../customers/CustomerProvider.js";
import { useEmployeeCustomers } from "../employees-customers/EmployeeCustomerProvider.js";

const contentTarget = document.querySelector(".employees");

export const EmployeeList = () => {
  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();
  const customers = useCustomers();
  const empCust = useEmployeeCustomers();

  const render = () => {
    contentTarget.innerHTML = employees.map(employee => {
      debugger
      // Find the computer assigned to this employee
      const computer = computers.find(computer => {
        return computer.id === employee.computerId;
      });

      // Find the department that the employee works in
      const department = departments.find(department => {
        return department.id === employee.departmentId;
      })

      // Find the location that the employee works at
      const location = locations.find(location => {
        return location.id === employee.locationId;
      })

      // Find all the customer relationships for the current employee
      const customerRelationships = empCust.filter(ec => {
        return ec.employeeId === employee.id;
      })

      //For each relationship, find the corresponding company
      const foundCustomersArray = customerRelationships.map(rc => {
        const foundCustomer = customers.find(customer => {
          return customer.id === rc.customerId
        })
        return foundCustomer
      })

      // Get HTML representation of employee
      const html = Employee(employee, computer, department, location, foundCustomersArray)

      return html;
    })
    .join("")
  };

  render()
};

export default EmployeeList;