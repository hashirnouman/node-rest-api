const Admin = require('../model/admin');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Empty"});
        return;
    }
    const admin = new Admin({
        name:req.body.name,
        email:req.body.email
    })
    admin.save(admin)
        .then(data=>{
        res.send(data);
    })
        .catch(err=>{
        res.status(500).send({mesaage:err})
    });
   
}
exports.getall=(req,res)=>{
    Admin.find()
            .then(result=>res.send(result))
            .catch(err=>console.log(err))
        
}
exports.getbyid=(req,res)=>{
    const prodId= req.params.productId
    Admin.findById(prodId)
        .then(result=>res.send(result))
        .catch(err=>res.send(err))
}


exports.deletebyid=(req,res)=>{
    const prodId=req.params.productId;
Admin.findByIdAndDelete(prodId)
        .then(result=>res.send(result))
        .catch(err=>{res.status(500).send({message:err})})
}

exports.updatebyid=(req,res)=>{
    const prodId= req.params.productId;
    
    Admin.findByIdAndUpdate(prodId,
    {name:req.body.name,
     email:req.body.email,
    })
        .then(result=>{
            return result.save();
            })
        .catch(err=>res.send(err))

}