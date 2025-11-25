/*
[STEP 1]
Open the inventoryManagement.js file in VS Code.
Create an array called products to store product names. Use the following four strings:
"Laptop"
"Phone"
"Headphones"
"Monitor"

[STEP 2]
Write a function called logFirstProduct to console log the details of the first product in the array.

[STEP 3]
Write a function called addProduct to add a new product to the array. This function should take the product name as an argument.

[STEP 4]
Write a function called updateProductName to change the name of a product. This function should take the product's position in the array and the new name as arguments.

[STEP 5]
Write a function called removeLastProduct to remove the last product from the array.
*/

// [STEP 1]
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// [STEP 2]
function logFirstProduct() {
  console.log(products[0]);
}

// [STEP 3]
function addProduct(productName) {
  products.push(productName);
}

// [STEP 4]
function updateProductName(position, newName) {
  /*if (position >= 0 && position < products.length) {
    products[position] = newName;
  } else {
    console.log("Invalid position");
  }*/
  for (let i = 0; i < products.length; i++) {
    if (i === position) {
      products[i] = newName;
      break;
    }
  }
}

// [STEP 5]
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
