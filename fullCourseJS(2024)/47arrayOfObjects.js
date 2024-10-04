// array of objects = [{}]

const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "brown", calories: 120 },
    { name: "pineapple", color: "yellow", calories: 37 },
  ];
  
  // fruits.push({ name: "grape", color: "purple", calories: 90 });
  // fruits.pop();
  // fruits.splice(1, 2);
  // console.log(fruits);
  
  // -------- forEach() --------
  
  // fruits.forEach((fruit) => {
  //   console.log(fruit.name);
  // });
  
  // -------- map() --------
  
  // const fruitsNames = fruits.map((fruit) => fruit.name);
  // const fruitsColors = fruits.map((fruit) => fruit.color);
  // const fruitsCalories = fruits.map((fruit) => fruit.calories);
  // console.log(fruitsNames);
  // console.log(fruitsColors);
  
  // -------- filter() --------
  
  // const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  
  // console.log(yellowFruits)
  // console.log(lowCalFruits)
  
  // -------- reduce() --------
  const maxFruit = fruits.reduce(
    (max, fruit) => (fruit.calories > max.calories ? fruit : max)
  );
  
  
  const minFruit = fruits.reduce(
      (min, fruit) => (fruit.calories < min.calories ? fruit : min)
    );
  
  console.log(maxFruit)
  console.log(minFruit);