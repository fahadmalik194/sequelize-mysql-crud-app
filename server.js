const express = require('express')
const app = express()
const db = require("./models")
const PORT = process.env.PORT || 3000
const apiRoutes = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api", apiRoutes)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listing on: http://localhost:', PORT)
    })
}).catch((e) => {
    console.log('Error:', e)
})