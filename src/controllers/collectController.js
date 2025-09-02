import User from "../models/User.js";
import Collect from "../models/Collect.js";

export const createCollection = async (req, res) => {
    const { user_id, quantity, collectionDate, returnDate } = req.body;
    const user = await User.findById( user_id );
    if(!user)
        return res.status(400).json({ message: 'User Does not exist. Create account'});
    
    const collection = await Collect.create({ user_id, quantity, collectionDate, returnDate });

    res.status(201).json({
        _id: collection._id,
        quantity: collection.quantity,
        collectionDate: collection.collectionDate,
        returnDate: collection.returnDate
    });
};