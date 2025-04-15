const {Diagnosis} = require('../models/model');
class DiagnosisController{
    async getDiagnosis(req,res){
        const { sortBy = 'idDiagnose', order = 'ASC'} = req.query;
        const where = {}
        const diagnose = await Diagnosis.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: diagnose.count,
            data: diagnose.rows
        })
    }
    async createDiagnose(req,res){
        const {code, name} = req.body;
        try{
            const diagnose = await Diagnosis.create({
                code, name
            })
            return res.status(200).json(diagnose);
        } catch(e){
            return res.status(500).json('Internal server error '+error);
        }
    }
}
module.exports = new DiagnosisController();