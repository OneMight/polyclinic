const {Appoitment, Diagnosis, Employee} = require('../models/model');
class AppoitmentController{
    async getAppoitment(req,res){
        const { sortBy = 'idAppoitment', order = 'ASC'} = req.query;
        const where = {}
        const appoitment = await Appoitment.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: appoitment.count,
            data: appoitment.rows
        })
    }
    async createAppoitment(req,res){
        const {diagnose, idTicket,FIO_Employee} = req.body;
        try{
            const employee = await Employee.findAll({
                where:{
                    FIO_Employee: FIO_Employee,
                }
            })
            const diagnosis = await Diagnosis.findAll({
                where:{
                    name: diagnose,
                }
            })
            const appoitment = await Patience.create({
                idTicket,
                diagnose,
                idDiagnose: diagnosis.idDiagnose,
                idEmployee: employee.idEmployee,

            })
            return res.status(200).json(appoitment);
        } catch(e){
            return res.status(500).json('Internal server error '+error);
        }
    }
}
module.exports = new AppoitmentController();