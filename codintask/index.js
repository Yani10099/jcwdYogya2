const Queue = require("./foodorder");

const queue = new Queue();

const orderFood = async (food) => {
  return new Promise((resolve) => {
    console.log(`Ordering food: ${food}`);
    resolve();
  });
};

const foods = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos"];

foods.forEach(async (food) => {
  await queue.enqueue(orderFood(food));
});

queue.process();
