
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



    /**
     * @constructor
     * @param {String} name - Developer name
     *
     * Developer constructor function
     *  
     * @returns {Void} 
     */
    function Developer(name) {
        this.name = name;
        this.type = "Developer";
    }
    
    
    
    /**
     * @constructor
     * @param {String} name - Tester name
     *
     * Tester constructor function
     *  
     * @returns {Void} 
     */
    function Tester(name) {
        this.name = name;
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
     * 
     * @returns {Void} 
     */
    EmployeeFactory.prototype.createEmployee = function(name, type) {
    
        switch(type) {
            case 1: 
                return new Developer(name);
            case 2: 
                return new Tester(name);
            default:
                return new Developer(name);
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

}(window));


// Make new factory
let employeeFactory = EmployeeFactory([]);


// Create employees
let employee1 = employeeFactory.createEmployee("Milos", 1);
let employee2 = employeeFactory.createEmployee("Nikola", 2);
let employee3 = employeeFactory.createEmployee("Uros", 1);
let employee4 = employeeFactory.createEmployee("Tijana", 1);
let employee5 = employeeFactory.createEmployee("Zorica", 1);
let employee6 = employeeFactory.createEmployee("Ivica", 2);

employeeFactory.saveEmployees(employee1,employee2,employee3,employee4,employee5,employee6).logEmployees();