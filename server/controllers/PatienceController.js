const {Patience} = require('../models/model');
class PatienceController{
    async getPatiences(req,res){
        const { sortBy = 'idPatience', order = 'ASC'} = req.query;
        const where = {}
        const patience = await Patience.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: patience.count,
            data: patience.rows
        })
    }
    async createPatience(req,res){
        const {FIO, birthday, Address, Sex, discount, idCard} = req.body;
        try{
            const patience = await Patience.create({
                FIO_Patience:FIO,
                Birthday_date:birthday,
                Address,
                Sex,
                discount,
                idCard,
            })
            return res.status(200).json(patience);
        } catch(error){
            return res.status(500).json('Internal server error '+error);
        }
    }
}
module.exports = new PatienceController();