const express = require('express');
const app = express();
const port = 3000;
const categoryRoutes = require('./routes/categoryRoutes');
const ProdRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/api', categoryRoutes);
app.use('/api',ProdRoutes);

// app.listen(port,() => {
//     console.log(`server running at http://localhost:${port}/`);
// })

sequelize.sync().then(() => {
    app.listen(port,() => {
        console.log(`server running at http://localhost:${port}/`);
    });
}).catch(ERr => console.log(ERr))