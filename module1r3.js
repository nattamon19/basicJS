class EmployeeManager {
    constructor() {
        this.employees = []
    }

    addEmployee(name, position) {
        const id = this.employees.length > 0 ? this.employees[this.employees.length - 1].id + 1 : 1;
        const newEmployee = {id: id, name: name, position: position};

        this.employees.push(newEmployee);
        return newEmployee;
    }

    removeEmployee(id) {
        const index = this.employees.findIndex(employee => employee.id === id)
        if (index === -1) {
            return false
        }
        this.employees.splice(index, 1)
        return true
    }

    findEmployeeByName(name) {
        return this.employees.filter(employee => employee.name.toLowerCase() === name.toLowerCase());
    }

    sortEmployeeByName() {
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }

    updateEmployee(employee) {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
            this.employees[index] = employee;
            return true;
        }
        return false;
    }

    promoteEmployee(id, newPosition) {
        const employee = this.employees.find(e => e.id === id);
        if (employee) {
            employee.position = newPosition;
            return true;
        }
        return false;
    }
}

// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer"));
console.log(manager.addEmployee("Jane Doe", "Designer"));
console.log(manager.findEmployeeByName("John Doe"));
manager.sortEmployeeByName();
console.log(manager.employees);
manager.promoteEmployee(1, "Senior Developer");
console.log(manager.employees);
