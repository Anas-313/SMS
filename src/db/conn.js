// const mongoose = require("mongoose");
// const url = "mongodb+srv://paldilip202:rXflnN2u4nX6oWdo@demo.cad5sk0.mongodb.net/demo?retryWrites=true&w=majority"

//    mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true

//  }).then(()=>{
//     console.log("Connection successful")
//  }).catch((err)=>{
//     console.log("something is wrong",err)
//  })

const mongoose = require("mongoose");
const url = "mongodb+srv://paldilip202:rXflnN2u4nX6oWdo@demo.cad5sk0.mongodb.net/demo?retryWrites=true&w=majority"

const connectdb = async () => {

return await mongoose.connect(url)
}

module.exports = {connectdb}


 