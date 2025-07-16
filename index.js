const express = require('express');
const mongoose = require('mongoose');
const itemsRoute = require('./routes/items');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/itemsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/items', itemsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
