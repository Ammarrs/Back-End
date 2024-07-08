const express = require('express');
const app = express();
const port = 3000;
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

sequelize.sync()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
})
.catch(err => console.log(err));
