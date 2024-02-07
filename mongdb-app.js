
import mongoose from 'mongoose'

const uri =
"mongodb+srv://user1:gahjUjYcXGFGTJ52@cluster0.mjbgypy.mongodb.net/";

mongoose.connect(uri).then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const Module = mongoose.model(
    "nodule",
    mongoose.Schema({
    name: String,
    description: String
  },
  { timestamps: true }))

// const getPosition = (id) =>{
//     return modules.map(e => e.id).indexOf(id)
// }

const limit20 = (value)=>{
    if(value.length >= 20) return true
    return false
    }

export const insertModule = (object) =>{
    if(limit20(object.name)){
         return "Nombre mayor a 20 caracteres"
    }

    const module = new Module({
        name: object.name,
        description: object.description
      });

      module
      .save(module)
      .then(data => {
        return;
      })
      .catch(err => {
        return "Error al crear el modulo"
      });  
    return object
    }
