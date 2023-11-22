const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("mongodb connected successfully");
}).catch((err)=>{
    console.log(err);
})

const student=new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student=new mongoose.model("students",student);

const adder=async()=>{
  const ss=await Student.create({
    
        name:"bishal",
        workout:true,
        height:8
    
  })
}

adder()