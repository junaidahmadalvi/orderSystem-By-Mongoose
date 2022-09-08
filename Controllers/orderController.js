
const Order = require("../Schemas/orderSchema")
var ObjectId= require("mongodb").ObjectId;


module.exports = {
    getOrder: async(req,res)=>{
        try{
           const getresult= await Order.find()
           res.send(getresult)
        }catch(e){console.log(e);}
    },
  
    
    getOrderById:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            const getIndividualResult = await Order.findById(_id)
            res.status(201).send(getIndividualResult)
    
        }catch(e){res.send(e);}
    },


    addOrder: async (req, res) => {
        try {
            console.log(req.body);
            const user = new Order(req.body);
    
            const result = await user.save()
            res.status(201).send(result)
        } catch (e) { res.status(400).send(e) }
    },

    updateOrder:  async(req,res)=>{
        try{
            const _id = req.params.id;
            console.log(_id);
            let newData = req.body 
            const updateResult = await Order.findByIdAndUpdate(_id , req.body,{
                new : true
            })
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },





    deleteOrder:   async(req,res)=>{
        try{
            const _id = req.params.id;
            const updateResult = await Order.findByIdAndDelete(_id)
            res.status(201).send(updateResult)
    
        }catch(e){res.status(404).send(e);}
    },



  };
  


