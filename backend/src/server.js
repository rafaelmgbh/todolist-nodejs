const app = require('./app');

require('dotenv').config();

// Caso a porta não esteja definida, será utilizada a porta 3333
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))