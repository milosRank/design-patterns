/*
    Adapter Coding Exercise

    You are given a class called Square and a function calculateArea() which calculates the area of a given rectangle.

    In order to use Square in calculate_area, instead of augmenting it with width/height members, please implement 
    the SquareToRectangleAdapter class. This adapter takes a square and adapts it in such a way that it can be used as an argument to calculateArea().


    TASK SETUP:

    class Square {

        constructor(side) {
            this.side = side;
        }
    }

    function area(rectangle) {
        return rectangle._width * rectangle._height;
    }

    // build an adapter called SquareToRectangleAdapter
    // s.t. we could call
    //
    // let sq = new Square(123);
    // area(new SquareToRectangleAdapter(sq));
    
*/


class Square {
    constructor(side) {
        this.side = side;
    }
}

function area(rectangle) {
    return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter {
    constructor(square) {
        this.square = square;
    }

    get width() {
        return this.square.side;
    }

    get height() {
        return this.square.side;
    }
}

describe('adapter', function () {
    it('should adapt things, duh!', function () {
        let sq = new Square(11);
        let adapter = new SquareToRectangleAdapter(sq);
        expect(area(adapter)).toEqual(121);
    });
});