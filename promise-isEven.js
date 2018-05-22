const isEven = new Promise((resolve, reject) => {
  const num = Math.round(Math.random() * 10)
  console.log('num', num)
  num % 2 === 0 ? resolve(`${num} is an even number`) : reject(`${num} is not an even number`)
})

isEven
  .then((result) => console.log(result))
  .catch(err => console.log(err))
