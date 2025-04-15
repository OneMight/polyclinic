const {Report} = require('../models/model');
class ReportController{
    async getReports(req,res){
        const { sortBy = 'idReport', order = 'ASC'} = req.query;
        const where = {}
        const reports = await Report.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: reports.count,
            data: reports.rows
        })
    }
    async createReport(req,res){
        
    }
}
module.exports = new ReportController();