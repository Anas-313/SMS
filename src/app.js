const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 5001;

const connectdb = require("./db/conn");

const Register = require("./models/registers");

const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set("view engine", "hbs");

app.get("/", (req, res) => {
   res.render("index");
});

app.get("/login", (req, res) => {
   res.render("login");
});

app.get("/register", (req, res) => {
   res.render("register");
});


app.post("/register", async (req, res) => {
   try {
   
        

      const password = req.body.password;
      const cpassword = req.body.Confirmpassword;

      if (password === cpassword) {

         const studentRegister= new Register({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            Confirmpassword: req.body.Confirmpassword,
            firstname: req.body.firstname,
            secondname: req.body.secondname,
            gender: req.body.gender,
            state: req.body.state
         });
        
     
       const saved =  await studentRegister.save();
      

          console.log("Student registered successfully");
          res.status(201).render("index");

      } else {
         res.send("Passwords do not match");
      }

   } catch (error) {
      res.send(error);
   }
});
await connectdb();
app.listen(port, () => {
   console.log(`Connection established on port: ${port}`);
});
