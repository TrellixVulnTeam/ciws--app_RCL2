
const mongoose = require('mongoose');
const Form = require ('../models/formModel.js')


 const addNewForm = async (req, res) => {
    const { worksOrder, headType,customerName,customerSupply,purchaseOrderNumber } = req.body;
    const  newForm = new Form({ worksOrder,
    headType,
    customerName,
    customerSupply,
    purchaseOrderNumber
    })

    try {
        await newForm.save();

        res.status(201).json(newForm );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

 const getForms =  async (req, res) => {
    try {
        const form = await Form.find()

        res.status(200).json(form);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

 const getForm = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    try {
        const form = await Form.findById({_id: id})
        
        res.status(200).json(form);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const UpdateForm = async (req, res) => {
    const { id } = req.params;
    const { worksOrder,headType,customerName,customerSupply,purchaseOrderNumber} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedForm = { worksOrder,headType,customerName,customerSupply,purchaseOrderNumber, _id: id };

    await Form.findByIdAndUpdate(id, updatedForm, { new: true });

    res.json(updatedForm);
}


 const deleteForm = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Form.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}
    module.exports = {
        addNewForm,
        getForms,
        getForm,
        UpdateForm,
        deleteForm,
      }
      

