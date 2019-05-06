const express = require('express');
const jwt = require('./jwt-web-token');

const app = express();


app.post('/api/posts', (req, res) => {  
  console.log("api hit ")
  try {
  let decode = jwt.verifyToken(req,res)
  console.log(decode + "line numver 212");
   res.json({
       message :"post here ..."
   })
  } 
  catch(err) {
      throw err
      res.sendStatus(403)
  }
});

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }
 
  let token = jwt.createToken(user,'30d')
  res.json({token});
});




app.listen(5000, () => console.log('Server started on port 5000'));
