class Order {
    // Module 1.2
    // constructor() {
    //   this.items = [];
    // }
  
    // getAllItems() {
    //   return this.items;
    // }
  
    // addItem(name, price, quantity) {
    //   if (name === undefined || price === undefined || quantity === undefined) {
    //     return [name, price, quantity];
    //   }
  
    //   let searchItem = this.items.find(
    //     (item) =>
    //       item.name.toLowerCase() === name.toLowerCase() &&
    //       (item.price <= 0 || item.quantity <= 0)
    //   );
  
    //   if (searchItem !== undefined) {
    //     return undefined;
    //   }
  
    //   const newItem = {
    //     name: name,
    //     price: price,
    //     quantity: quantity,
    //   };
  
    //   this.items.push(newItem);
    //   return newItem;
    // }
  
    // removeItem(name) {
    //   let targetIndex = this.items.findIndex(
    //     (item) => item.name.toLowerCase() === name.toLowerCase()
    //   );
  
    //   if (targetIndex !== -1) {
    //     this.items.splice(targetIndex, 1);
    //   }
    // }
  
    // calculateTotal() {
    //   return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    // }
  
    // getDiscountedTotal(discountPercentage) {
    //   if (discountPercentage < 0 || discountPercentage > 100) {
    //     return "invalid discount percentage";
    //   }
  
    //   const total = this.calculateTotal();
    //   const discountedTotal = total - (total * discountPercentage) / 100;
    //   return discountedTotal;
    // }
  
    // findItemByName(name) {
    //   return this.items.find((item) => item.name.toLowerCase() === name.toLowerCase()) || null;
    // }
  
    // Module 1.1
    sortItemsByPrice(sortingOrder) {
      if (sortingOrder !== "ascending" && sortingOrder !== "descending") {
        return [];
      }
  
      if (this.items.length === 0) {
        return [];
      }
  
      const sortedItems = [...this.items];
      sortedItems.sort((a, b) => {
        if (sortingOrder === "ascending") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
  
      return sortedItems;
    }
  
    isItem(item) {
      return (
        item &&
        item.name !== undefined &&
        item.name !== null &&
        item.name !== "" &&
        item.price >= 0 &&
        item.quantity >= 0
      );
    }
  }
  
  // Example Usage
  let myOrder = new Order();
 
// console.log(
//   "add item----------------------------------------------------------------"
// );
// //add item
// console.log(myOrder.addItem({ name: "Laptop", price: 1000, quantity: 1 })); // Adds Laptop and return this item
// console.log(myOrder.addItem({ name: "Keyboard", price: 100, quantity: 2 })); // Adds Keyboard and return this item
// console.log(myOrder.addItem({ name: "Mouse", price: 25, quantity: 3 })); // Adds Mouse and return this item
// console.log(myOrder.addItem({ name: "", price: 100, quantity: 1 })); // Empty name, should not add and return -1
// console.log(myOrder.addItem({ name: "Headphones", price: -50, quantity: 1 })); // Negative price, should not add and return -1
 
// console.log(
//   "remove item----------------------------------------------------------------"
// ); //remove item
// myOrder.removeItem("Laptop"); // Removes Laptop if it exists
// console.log(myOrder.items);
 
// myOrder.removeItem("Keyboard"); // Removes Keyboard if it exists
// console.log(myOrder.items);
 
// myOrder.removeItem("NonExistentItem"); // Tries to remove a non-existent item
// console.log(myOrder.items);
 
// myOrder.removeItem(""); // Tries to remove an item with an empty name
// console.log(myOrder.items);
 
// myOrder.removeItem("Mouse"); // Removes Mouse if it exists
// console.log(myOrder.items);
 
// console.log(
//   "calculateTotal----------------------------------------------------------------"
// );
// //calculateTotal
// console.log(myOrder.calculateTotal());
 
// console.log(
//   "getDiscountedTotal----------------------------------------------------------------"
// );
// //getDiscountedTotal
// console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount if total price is 100 will return 90
// console.log(myOrder.getDiscountedTotal(0)); // No discount applied (0%) return “invalid discount percentage”
// console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount if total price is 100 will return 0
// console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage, should not apply return “invalid discount percentage”
 
// console.log(
//   "findItemByName----------------------------------------------------------------"
// );
// //findItemByName
// console.log(myOrder.findItemByName("Laptop")); // Finds Laptop if it exists
// console.log(myOrder.findItemByName("Keyboard")); // Finds Keyboard if it exists
// console.log(myOrder.findItemByName("NonExistentItem")); // Tries to find a non-existent item return null
// console.log(myOrder.findItemByName("")); // Tries to find an item with an empty name return null
 
// console.log(
//   "sortItemsByPrice----------------------------------------------------------------"
// );
//sortItemsByPrice
 
console.log(myOrder.sortItemsByPrice("ascending")); // return new array with ascending
console.log(myOrder.sortItemsByPrice("descending")); // return new array with descending
console.log(myOrder.sortItemsByPrice("nonexistentOrder")); // return empty array if invalid sorting order
myOrder.items = [];
console.log(myOrder.sortItemsByPrice("ascending")); // return empty array if items array is empty
 
console.log(
  "isItem----------------------------------------------------------------"
);
//isItem
console.log(myOrder.isItem({ name: "Pen", price: 3, quantity: 10 })); // valid item return true
console.log(myOrder.isItem({ name: "Paper", price: 5, quantity: 20 })); // valid item return true
console.log(myOrder.isItem(null)); // valid item return false
console.log(myOrder.isItem(undefined)); // valid item return false
console.log(myOrder.isItem({ price: 20, quantity: 1 })); // missing name return false
console.log(myOrder.isItem({ name: "Notebook", price: -10, quantity: 5 })); // negative price return false
console.log(myOrder.isItem({ name: "Notebook", price: 10, quantity: -5 })); // negative quantity return false
console.log(myOrder.isItem({ name: "", price: 15, quantity: 5 })); // empty name return false