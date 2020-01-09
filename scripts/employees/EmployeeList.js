import { useEmployees } from "../employees/EmployeeProvider.js";
import { useComputers } from "../computers/ComputerProvider.js";
import Employee from "./Employee.js";
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";

const contentTarget = document.querySelector(".employees");

export const EmployeeList = () => {
  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments()
  const locations = useLocations()

  const render = () => {
    contentTarget.innerHTML = employees.map(employee => {
      
      // Find this employee's computerId
      const computer = computers.find(computer => {
        return computer.id === employee.computerId;
      });

      const department = departments.find(department => {
        return department.id === employee.departmentId;
      })

      const location = locations.find(location => {
        return location.id === employee.locationId;
      })

      // Get HTML representation of employee
      const html = Employee(employee, computer, department, location)

      return html;
    })
    .join("")
  };

  render()
};

export default EmployeeList;