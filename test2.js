//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.

class Order {
//     constructor(orderId,customerName){
//       this.orderId = orderId
//       this.customerName = customerName
//       this.items = []
//     }
  
//      addItem(item){
//   //ไม่ต้องมีอันนี้เพราะเค้าสร้างobjectcโดยไม่ได้เรียกใช้อะไร
//     //   item = {
//     //     name,
//     //     price,
//     //     quantity
//     //   }
  
//     //   if (
//     //     (item.name === undefined || item.name === null || item.name.length === 0) ||
//     //     (item.price === undefined || item.price === null || item.price.length === 0) ||
//     //     (item.quantity === undefined || item.quantity === null || item.quantity.length === 0)
//     //   ) {
//     //     return -1
//     //   }
    
//     //   const CheckPriceAndQuantity = this.items.findIndex((item) => {
//     //     item.price > 0 && item.quantity > 0
//     //   })
  
    
//     //   if (CheckPriceAndQuantity !== -1) {
//     //     this.items.push(item)
//     //   }else{
//     //     return -1
//     //   }
//     //   return item
//     if(item===undefined||item===null||item.price<0||item.quantity<0||item.name===''){
//         return -1
//     }else{
//         this.items.push(item)
//         return item
//     }

//     }
  
//      removeItem(itemName) {
//       const removeIndex = this.items.findIndex((item) => item.name.toLowerCase() === itemName.toLowerCase())
//        if (removeIndex !== -1) {
//          myOrder.items.splice(removeIndex ,1)
//        }
//      }
//      //remove correct
  
//       calculateTotal(){
//       const total = this.items.reduce((pre,cur) => (pre.price = pre.price + cur.price , 0))
//       return total
//       //reduce น่าจะใช้แบบนี้ไม่ได้
//     }
  
  
//      getDiscountedTotal(discountPercentage){
//       if (discountPercentage === 0 || discountPercentage < 0 || discountPercentage > 0) {//ตรงนี้ต้อง>100รึเปล่า
//         return 'invalid discountpercentage'
//       }
//       discountPercentage = (discountPercentage / 100) * this.calculateTotal()
//      }
//     //ลืม return ตรงelse and your calculateTotal is not working so it's make `discountPercentage` not working too.

  
  
//      findItemByName(itemName){
//       const matchingName = this.items.find((findName) => findName.name.toLowerCase() === itemName.toLowerCase() )
//       if (matchingName) {
//         return matchingName
//       }else{
//         return null
//       }
    
//     }
//     //find by name is correct!
  
     sortItemsByPrice(sortingOrder) {
      const sorting = this.items.filter((price) => price)
      if(sorting){
        if (sortingOrder.toLowerCase() === 'ascending') {
          return sorting.sort((a,b) => a-b) || []
        }
        if (sortingOrder.toLowerCase() === 'descending') {
          return sorting.sort((a,b) => b-a)
        }
        if (sortingOrder === null || sortingOrder === undefined) {
          return []
        }
      }
    }
     isItem(Item){
      if(Item === undefined || Item === null) return false
      
      const CheckPriceAndQuantity = this.items.findIndex((item) =>     
      (item.price === undefined || item.price === null || item.price.length === 0) ||
      (item.quantity === undefined || item.quantity === null || item.quantity.length === 0) ||
      (item.price <= 0 || item.quantity <= 0))
     
      if (CheckPriceAndQuantity) {
        return false
      }else{
        return true
      }
     }
  }
  
  let myOrder = new Order(1, "John Wick");
  
//   console.log(
//     "add item----------------------------------------------------------------"
//   );
  
//   //add item
//   console.log(myOrder.addItem({ name: "Laptop", price: 1000, quantity: 1 })); // Adds Laptop and return this item
//   console.log(myOrder.addItem({ name: "Keyboard", price: 100, quantity: 2 })); // Adds Keyboard and return this item
//   console.log(myOrder.addItem({ name: "Mouse", price: 25, quantity: 3 })); // Adds Mouse and return this item
//   console.log(myOrder.addItem({ name: "", price: 100, quantity: 1 })); // Empty name, should not add and return -1
//   console.log(myOrder.addItem({ name: "Headphones", price: -50, quantity: 1 })); // Negative price, should not add and return -1
  
//   console.log(
//     "remove item----------------------------------------------------------------"
//   );

//   //remove item
//   myOrder.removeItem("Laptop"); // Removes Laptop if it exists
//   console.log(myOrder.items);
  
//   myOrder.removeItem("Keyboard"); // Removes Keyboard if it exists
//   console.log(myOrder.items);
  
//   myOrder.removeItem("NonExistentItem"); // Tries to remove a non-existent item
//   console.log(myOrder.items);
  
//   myOrder.removeItem(""); // Tries to remove an item with an empty name
//   console.log(myOrder.items);
  
//   myOrder.removeItem("Mouse"); // Removes Mouse if it exists
//   console.log(myOrder.items);
  
//   console.log(
//     "calculateTotal----------------------------------------------------------------"
//   );
  
//   //calculateTotal
//   console.log(myOrder.calculateTotal());
  
//   console.log(
//     "getDiscountedTotal----------------------------------------------------------------"
//   );
//   //getDiscountedTotal
//   console.log(myOrder.getDiscountedTotal(10)); // Applies 10% discount if total price is 100 will return 90
//   console.log(myOrder.getDiscountedTotal(0)); // No discount applied (0%) return โ€invalid discount percentageโ€
//   console.log(myOrder.getDiscountedTotal(100)); // Applies 100% discount if total price is 100 will return 0
//   console.log(myOrder.getDiscountedTotal(-10)); // Negative discount percentage, should not apply return โ€invalid discount percentageโ€
  
//   console.log(
//     "findItemByName----------------------------------------------------------------"
//   );
  
//   //findItemByName
//   console.log(myOrder.findItemByName("Laptop")); // Finds Laptop if it exists
//   console.log(myOrder.findItemByName("Keyboard")); // Finds Keyboard if it exists
//   console.log(myOrder.findItemByName("NonExistentItem")); // Tries to find a non-existent item return null
//   console.log(myOrder.findItemByName("")); // Tries to find an item with an empty name return null
  
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