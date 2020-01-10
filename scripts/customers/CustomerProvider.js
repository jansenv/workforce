let customers = []

export const getCustomers = () => {
    return fetch("http://localhost:3000/customers")
    .then(res => {
        return res.json()
    })
    .then(parsedCustomers => {
        return customers = parsedCustomers
    })
}

export const useCustomers = () => {
    return customers.slice()
}