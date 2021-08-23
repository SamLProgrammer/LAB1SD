const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

app.get('/status', (req, res) => {
  if(between(1,5) == 3) {
    res.sendStatus(500)
  } else {
    res.sendStatus(200)
  }
})