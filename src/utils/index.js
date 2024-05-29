/**
 * This function calculates total price of a new order
 * @param {Array} products Array of Products Objects
 * @returns {number} Total price
*/
export const totalPrice = (products) => {

  return products.reduce((acc, product) => {
    if (Object.prototype.hasOwnProperty.call(product, 'price') && typeof product.price === 'number') {
      return acc + product.price;
    }

    return  acc;
  }, 0).toFixed(2);

}