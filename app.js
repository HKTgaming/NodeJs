const express = require('express')
const app = express()
const port = 5000

// router
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Chúc mừng bạn đã kết nối cổng ${port} thành công`)
})