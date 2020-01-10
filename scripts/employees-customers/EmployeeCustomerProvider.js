let employeeCustomers = []

export const getEmployeeCustomers = () => {
    return fetch("http://localhost:3000/employeeCustomers")
    .then(res => {
        return res.json()
    })
    .then(parsedEmployeeCustomers => {
        return employeeCustomers = parsedEmployeeCustomers
    })
}

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}