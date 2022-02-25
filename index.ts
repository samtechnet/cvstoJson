import express from 'express';
import routes from './src/routes/index';
const app = express();
const PORT = 5005;
app.use('/apis', routes)

app.get("/", (req, res) => {
   
  
    res.send("This is base API");
  });

// /Users/HP/OneDrive - SAMTECHNET/Documents/File-System/index'
 

app.listen(PORT, () => console.log(`app started on port ${PORT}`));

export default app;