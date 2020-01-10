import { getEmployees } from "./employees/EmployeeProvider.js";
import { getComputers } from "./computers/ComputerProvider.js";
import EmployeeList from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/DepartmentProvider.js";
import { getLocations } from "./locations/LocationProvider.js";
import { getEmployeeCustomers } from "./employees-customers/EmployeeCustomerProvider.js";
import { getCustomers } from "./customers/CustomerProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getEmployeeCustomers)
    .then(getCustomers)
    .then(EmployeeList);