const goHome = new Promise((resolve) => {
  setTimeout(()=>{
    resolve('I have just arrived home.')
  },2000)
  console.log('I am playing a mobile phone.')
})

function sendMessage(message) {
  console.log(message)
}

goHome.then(sendMessage)
console.log('Hi')
