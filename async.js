const goHome = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I have just arrived home.')
  }, 2000)
  console.log('I am playing a mobile phone.')
})

async function sendMessage() {
  const msg = await goHome
  console.log(msg)
}

sendMessage().then(() => console.log('Play together.'))
console.log('Hi')