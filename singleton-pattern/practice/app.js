/*
    Singleton Coding Exercise

    Since implementing a singleton is easy, you have a different challenge: write a function called isSingleton(). 
    This method takes a factory (i.e., a function that returns an object).
    It's up to you to determine whether or not that object is a singleton instance or not.


    TASK SETUP:

    class SingletonTester {

        static isSingleton(generator) {
            // todo
        }
    }
*/


class SingletonTester {


    /**
     * Check if function is returning a singleton
     * 
     * @param {Function} generator 
     * 
     * @returns {Boolean} - true if function result is singleton, false if not
     */
    static isSingleton(generator) {
        
        // Create temp instances
        let firstInstance = generator("John", 33);
        let secondInstance = generator("John", 33);

        // Check if two instances are the same, not only by reference
        let isInstanceSingleton = firstInstance === secondInstance ? true : false;

        firstInstance = secondInstance = null; // Delete temporarly created instances

        return isInstanceSingleton;
    }
}



class EmployeeFactory {
    
    static createEmployee(name, age) {
        return new Employee(name, age);
    }
}

class Employee {

    constructor(name, age) {
        this.name = name;
        this.age = age;

        // Make class singleton
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }
}

class CarFactory {
    
    static createCar(brand, yearOfProduction) {
        return new Car(brand, yearOfProduction);
    }
}

class Car {

    constructor(brand, yearOfProduction) {
        this.brand = brand;
        this.yearOfProduction = yearOfProduction;
    }
}


let isEmployeeSingleton = SingletonTester.isSingleton(EmployeeFactory.createEmployee);
let isCarSingleton = SingletonTester.isSingleton(CarFactory.createCar);

console.log(isEmployeeSingleton); // true
console.log(isCarSingleton); // false