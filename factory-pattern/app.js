
/**
 * NAME: Factory pattern
 */


/**
 * @param {Array} arr 
 * @param  {...any} items 
 * 
 * Helper function to push unlimited number of items to array 
 * 
 * @returns {Void}
 */
function pushItemsToArray(arr, ...items) {
    items.forEach(item => arr.push(item));
}



// Fake a namespace
(function(global) {


    // Aviailable employee type
    const EMPLOYEE_TYPE = {
        
        developer: {
            type: 1
        },
        tester: {
            type: 2
        }
    }


    /**
     * @constructor
     * @param {String} name - Developer name
     * @param {String} ID - ID of the Developer
     *
     * Developer constructor function
     *  
     * @returns {Void} 
     */
    function Developer(name, ID) {
        this.name = name;
        this.ID = ID;
        this.type = "Developer";
    }
    
    
    
    /**
     * @constructor
     * @param {String} name - Tester name
     * @param {Int} ID - ID of the Tester
     *
     * Tester constructor function
     *  
     * @returns {Void} 
     */
    function Tester(name, ID) {
        this.name = name;
        this.ID = ID;
        this.type = "Tester";
    }
    
    
    
    /**
     * @constructor
     * @param {Array} employeesArr - initial array of employees
     * 
     * This is a employee factory. It creates employees.
     * 
     * @returns {Void}
     */
    let EmployeeFactory = function(employeesArr) {
        return new EmployeeFactory.init(employeesArr);
    }
    

    
    /**
     * This function is creating employee.
     * 
     * @param {String} name - name of employess 
     * @param {Int} type - type of employee
     * @param {Int} ID - ID of employee
     * 
     * @returns {Void} 
     */
    EmployeeFactory.prototype.createEmployee = function(name, type, ID) {

        this.validateEmployeeType(type);
    
        switch(type) {
            case 1: 
                return new Developer(name, ID);
            case 2: 
                return new Tester(name, ID);
            default:
                return new Developer(name, ID);
        }
    }



    /**
     * This function is creating employee.
     * 
     * @param {Int} ID - ID of the employee
     * 
     * @returns {Void} 
     */
    EmployeeFactory.prototype.deleteEmployee = function(ID) {

        let employee = this.getEmployeeByID(ID);

        // TO DO - Finish this method
        
        // Make this method chainable
        return this;
    }



    /**
     * This function is creating employee.
     * 
     * @param {Int} ID - ID of the employee
     * 
     * @returns {Void} 
     */
    EmployeeFactory.prototype.getEmployeeByID = function(ID) {
        return this.employeesArr.filter(item => item.ID == ID);
    }



    /**
     * Validate employee types (checks if passed employee type is in the list).
     * 
     * @param {Int} type - type of employee
     * 
     * @throws - Throw error if type don't exists
     */
    EmployeeFactory.prototype.validateEmployeeType = function(type) {

        // Check if type exists
        const availableEmployeeTypes = Object.values(EMPLOYEE_TYPE).map(obj => obj.type);
        let typeExists = Object.values(availableEmployeeTypes).includes(type);

        if(!typeExists) {
            throw new Error(type + " of employee dont exists!");
        }
    }
    

    
    /**
     * @constructor
     * @param {Array} employeesArr
     *  
     * Initialize employee factory
     * 
     * @returns {Void} 
     */
    EmployeeFactory.init = function(employeesArr) {
        this.employeesArr = employeesArr;
    }
    

    
    /**
     * @param {...any} listOfEmployees
     *  
     * Save employees to internal list of employees
     * 
     * @returns {object} - this  
     */
    EmployeeFactory.prototype.saveEmployees = function(...listOfEmployees) {

        // Save employees
        pushItemsToArray(this.employeesArr, ...listOfEmployees);
    
        // Make method chainable
        return this;
    }
    
    

    /**
     * Log all employees
     * 
     * @returns {object} - this   
     */
    EmployeeFactory.prototype.logEmployees = function() {
    
        // Log list of employees
        console.log(this.employeesArr);
    
        // Make method chainable
        return this;
    }
    
    

    // Connect prototypes to make inheritance possible
    EmployeeFactory.init.prototype = EmployeeFactory.prototype;

    // Attach employee factory to global object
    global.EmployeeFactory = EmployeeFactory;
    
    // Attach employee types to global object
    global.EMPLOYEE_TYPE = EMPLOYEE_TYPE;

}(window));


// Make new factory
let employeeFactory = EmployeeFactory([]);

// Create employees
let employee1 = employeeFactory.createEmployee("Milos", EMPLOYEE_TYPE.developer.type, 3);
let employee2 = employeeFactory.createEmployee("Uros", EMPLOYEE_TYPE.developer.type, 2);
let employee3 = employeeFactory.createEmployee("Tijana", EMPLOYEE_TYPE.developer.type, 1);

employeeFactory.saveEmployees(employee1,employee2,employee3).logEmployees();



// Make new factory
let employeeFactory2 = EmployeeFactory([]);

// Create employees
let employee4 = employeeFactory2.createEmployee("Zorica", EMPLOYEE_TYPE.developer.type, 1);
let employee5 = employeeFactory2.createEmployee("Ivica", EMPLOYEE_TYPE.tester.type, 2);

employeeFactory2.saveEmployees(employee4,employee5).logEmployees();
employeeFactory2.deleteEmployee(1).logEmployees();