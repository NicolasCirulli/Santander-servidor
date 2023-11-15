const Customer = require( '../models/Customer' )

const customerController = {
    async getCustomer(req, res){

        try{
            const customers = await Customer.find()
            res.status(200).json( { success:true, customers: customers } )
        }catch(err){
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
    },
    async getOneCustomer( req, res ){
        try{
            const customer = await Customer.findById( req.params.id )
            res.status( 200 ).json( { success:true, customer: customer } )
        }catch(err){
            res.status( 500 ).json( { success:false, message: "Internal server error" } )
        }

    },
    async createCustomer(req, res){
        try{
            const newCustomer = await Customer.create( req.body )
            res.status(201).json( { success:true, customer: newCustomer } )
        }catch(err){
            console.log( err )
            res.status(500).json( { success:false, message: "Internal server error" } )
        }
       
    },
    async updateCustomer(req, res){
        try{
           const customerUpdated =  await Customer.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
           res.status( 200 ).json( { success:true, customer: customerUpdated, message: 'update' } )
        }catch(err) {

        }
    },
    deleteCustomer( req, res ){
        res.send( "Customers borrado" )
    }   
}

module.exports = customerController
