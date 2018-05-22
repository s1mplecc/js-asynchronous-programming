function goHome(callback) {
  setTimeout(() => {
    callback()
  }, 2000)
  console.log('I am playing a mobile phone.')
}

function sendMessage() {
  console.log('I have just arrived home.')
}

goHome(sendMessage)
