/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //* Initial Approach
  // let resultArr = [];
  // transactions.forEach((item) => {
  //   const isCategoryExist = resultArr.some(
  //     (storedItem) => storedItem.category === item.category
  //   );
  //   if (isCategoryExist) {
  //     resultArr.forEach((storedItem) => {
  //       if (storedItem.category === item.category)
  //         storedItem.totalSpent += item.price;
  //     });
  //   } else {
  //     resultArr.push({ category: item.category, totalSpent: item.price });
  //   }
  // });
  // return resultArr;

  //* Optimized Approach by doing R&D
  const resultObj = {};

  transactions.forEach((item) => {
    const { category, price } = item;

    if (resultObj[category]) {
      resultObj[category].totalSpent += price;
    } else {
      resultObj[category] = { category, totalSpent: price };
    }
  });

  return Object.values(resultObj);
}

module.exports = calculateTotalSpentByCategory;
