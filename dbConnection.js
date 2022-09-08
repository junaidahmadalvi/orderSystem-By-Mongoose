const mongoose = require('mongoose');


function connection()
{
    try {
        mongoose.connect("mongodb+srv://admin:lion123@mycluster.9ec18q0.mongodb.net/orderSystem");
        console.log(" Connection Build");
        
    } catch (error) {
        console.log("Error: Connection not build");
    }
}
module.exports = connection;