
const Customer = require("../Schemas/customerSchema")

var ObjectId= require("mongodb").ObjectId;

// require("./dbConnection");

module.exports = {
    getCustomer: async(req,res)=>{
        try{
        //    const getresult=  
            const getresult= await Customer.find()
            console.log(getresult);
           res.send(getresult)
        }catch(e){console.log(e);}
    },
  
    


    
    getCustomerById:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            const getIndividualResult = await Customer.findById(_id)
            res.status(201).send(getIndividualResult)
    
        }catch(e){res.send(e);}
    },


    addCustomer: async (req, res) => {
        try {
            console.log(req.body);
            const user = new Customer(req.body);
    
            const result = await user.save()
            res.status(201).send(result)
        } catch (e) { res.status(400).send(e) }
    },

    updateCustomer: async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            
            const updateResult = await Customer.findByIdAndUpdate(_id , req.body,{
                new : true
            })
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },



    deleteCustomer:  async(req,res)=>{
        try{
            const _id = req.params.id;
            const updateResult = await Customer.findByIdAndDelete(_id)
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },



  };
  


