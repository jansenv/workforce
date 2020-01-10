const Employee = (employee, computer, department, location, customers) => {
  return `
        <section class="employee__name"
            <header>
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
            <div>
                Age: ${employee.age}
            </div>
            <div class="employee__computer">
                Currently using a ${computer.year} ${computer.model}
            </div>
            <div class="employee__department">
                Works in the ${department.name} department
            </div>
            <div class="employee__location">
                Works at the ${location.city} office
            </div>
            <div>
                <p>Currently working for...</p>
                <ol>
                    ${
                        customers.map(c => {
                            return `<li>${c.businessName}</li>`
                        }).join("")
                    }
                </ol>
            </div>
        </section>
    `;
};

export default Employee;