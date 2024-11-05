// FIRST ASSIGNMENT

function num(...numbers) {
  if (numbers.length <= 2) {
    return "Enter more than 2 numbers";
  }

  const sumOfFirstTwo = (numbers[0] = numbers[1]);
  const produtRest = numbers
    .slice(2)
    .reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  return [sumOfFirstTwo, produtRest];
}

const result = num(4, 1, 4, 10);
console.log("Result is ", result);

// SECOND ASSIGNMENT

const user = {
  banks: [
    {},
    {},
    {
      address: {
        city: "Tbilisi",
      },
    },
  ],
};

function getCityFromUser(user) {
  const { banks } = user;

  if (banks && banks[2] && banks[2].address) {
    const { city } = banks[2].address;
    return city;
  }
  return undefined;
}
console.log(getCityFromUser(user));
