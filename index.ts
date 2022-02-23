import express from 'express';
import routes from '/Users/HP/OneDrive - SAMTECHNET/Documents/File-System/index';
const app = express();
const PORT = 5003;
app.use('/apis', routes)

app.get("/", (req, res) => {
   
  
    res.send("This is base API");
  });

 
 

app.listen(PORT, () => console.log(`app started on port ${PORT}`));

export default app;