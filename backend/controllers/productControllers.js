import Products from "../modals/productModal.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price, image} = req.body;
        console.log(req.body,"p data controller")
        if (!name) return  res.status(400).json({message:"Name is required!"})
        if (!price) return  res.status(400).json({message:"Price is required!"})
        if (!image) return  res.status(400).json({message:"Image is required!"})
        const product = new Products({
            name, price, image
        })
        await product.save();
        console.log(product,"product here");
        return res.status(201).json({ success: true, message: "Product added successfully.", product });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error })
    }
}


export const getAllProducts = async (req, res) => {
    try {
        console.log("inside get product cont");
        const resposne = await Products.find({}).exec();
        console.log(resposne,"response here");
        if (resposne) {
            console.log("inn");
            console.log(resposne,"res");
            return res.status(200).json({ success: true, products: resposne });
        } else {
            return res.status(404).json({ success: false, message: "No Products Found!" });
        }
    } catch (error) {
        console.log(error,"errror here.............");
        return res.status(500).json({ success: false, message: error });
    }
}


export const getSingleProduct = async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Products.findById({_id:id}).exec();
        console.log(response,"response here----------");
        if(response){
            return res.status(200).json({success:true,response})
        }else{
            return res.status(404).json({message:"Products not found."})
        }
    }catch(err){
        return res.status(500).json({message:err})
    }
}