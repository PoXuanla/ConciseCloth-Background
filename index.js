const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./app/models')

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    msg: 'Login successfully.'
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`)
})
