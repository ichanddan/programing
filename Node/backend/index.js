import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Your server is Ready')
})

app.listen(port, () => {
  console.log(`Your Server run http://localhost:${port}`)
})