// Add your Circle class here

// Task 1: Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi

// Task 2: Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly


class Circle {
    
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }
    set diameter(diameter) {
        this.radius = diameter / 2 
    }

    get circumference() {
        return Math.PI * this.diameter
    }
    set circumference(circumference) {
        this.radius = circumference / Math.PI / 2
    }

    get area() {
        return Math.PI * this.radius * this.radius
    }
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI) 
    }

}

