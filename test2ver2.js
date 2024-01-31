    // module 1.1
    class Order {
      sortItemsByPrice(sortingOrder) {
        if (sortingOrder !== "ascending" && sortingOrder !== "descending") {
          return [];
        }
          
        if (sortItemsByPrice === []) {
          return [];
        }
      }
      
      isItem(Item) {
        if (Item == null || Item == undefined || Item.name == "") {
          return false
        } if (Item.price <= 0 || Item.quantity <= 0) {
          return false
        } 
        else {
            return true
        }
    }
  }

    let myOrder = new Order(1, "John Wick");
    console.log(
        "sortItemsByPrice----------------------------------------------------------------"
      );
      
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