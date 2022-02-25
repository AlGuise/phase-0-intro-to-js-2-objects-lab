const employee = {
    name: "Tom",
    streetAddress: "1 Privit Drive",
}

function updateEmployeeWithKeyAndValue(obj, name, streetAddress) {
    const newEmployee = { ...obj };
    newEmployee[name] = streetAddress;
    return newEmployee;
}

const employeeTwo = updateEmployeeWithKeyAndValue(
    "Elena",
    "4 Main Street",
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

const replaceEmployee = destructivelyUpdateEmployeeWithKeyAndValue("Karen", "10 Murdock Place")

function deleteFromEmployeeByKey(obj) {
    const EmployeeTemplate = { ...obj };
    delete EmployeeTemplate.name
    delete EmployeeTemplate.streetAddress
    return EmployeeTemplate
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
}

const FiredEmployee =  destructivelyDeleteFromEmployeeByKey(key, value)
