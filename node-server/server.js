import app from './src/app.js';
import { dbconnect } from './src/config/db.config.js';
import { ENV } from './src/config/env.config.js';
const PORT = process.env.PORT || 5000; 

//connect to database
dbconnect();

app.listen(ENV.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})