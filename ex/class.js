// MODULD 1.2

// 1. class
class Book {
    constructor(title, author, yearPublished) {
        this.title = title || 'no title'
        this.author = author || 'no author'
        this.yearPublished = yearPublished || 0
    }

    getInfo() {
        return `title:${this.Booktitle}, author:${this.Bookauthor}, yearPublished:${this.BookyearPublished}`
    }
}

let b1 = new Book('', null,)
console.log(b1)
console.log(b1.getInfo())

// 2. class
class Elevator {
    constructor(maxFloor, minFloor) {
        this.currentFloor = 0
        this.maxFloor = maxFloor
        this.minFloor = minFloor
    }

    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++
        }
    }

    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--
        }
    }

    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor
        }
    }

    displayFloor() {
        console.log(`Current floor: ${this.currentFloor}`)
    }
}

const elevator = new Elevator(15, 1)
elevator.displayFloor()
elevator.goUp()
elevator.displayFloor()
elevator.goToFloor(3)
elevator.displayFloor()