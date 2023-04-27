function compareArrays(arr1, arr2) {
  if (
    arr1.length === arr2.length &&
    arr1.every(
      (element, index) => arr1.index === arr2.index && element === arr2[index]
    )
  ) {
    return "true";
  } else if (
    arr1.length === arr2.length &&
    arr1.every(
      (element, index) => arr1.index === arr2.index || element === arr2[index]
    )
  ) {
    return "false, разные индексы, хотя и одинаковые значения";
  } else {
    return "false, разные значения";
  }
}

//console.log(compareArrays([8, 1, 2, 5, 6], [8, 1, 2, 5, 6]));

const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => gender === user.gender)
    .map((userAge) => userAge.age)
    .reduce(
      (sumAges, currentAge, index, userAges) =>
        sumAges + currentAge / userAges.length,
      0
    );

  return result;

}

//console.log(getUsersNamesInAgeRange(people, "женский"));
