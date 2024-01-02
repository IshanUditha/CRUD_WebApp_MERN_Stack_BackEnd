const userDetails = require('./model');



const getUser = (req, res, next)=>{
    userDetails.find()
        .then(response =>{
            res.json({response})
        })
        .catch(error =>{
            res.json({error})
        });

};
const addUser = (req, res, next) =>{
    const user = new userDetails({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
       

    });
    user.save()
        .then(response =>{
            res.json({response})
        })
        .catch(error =>{
            res.json({error})
        });

}
const updateUser = (req, res, next) =>{
    const {id, firstName, lastName, address} = req.body;
    userDetails.updateOne({id: id},{
        $set: {
            firstName: firstName, 
            lastName: lastName, 
            address: address
        }})
        .then(response =>{
            res.json({response})
        })
        .catch(error =>{
            res.json({error})
        });

}
const deleteUser = (req, res, next) =>{
    const {id} = req.body;
    userDetails.deleteOne({id: id})
        .then(response =>{
            res.json({response})
        })
        .catch(error =>{
            res.json({error})
        });
}



exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
