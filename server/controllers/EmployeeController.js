const {Employee} = require('../models/model');
const bcrypt = require('bcrypt');
class EmployeeController{
    async getEmployees(req,res){
        const { sortBy = 'idEmployee', order = 'ASC'} = req.query;
        const where = {}
        const employees = await Employee.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: employees.count,
            data: employees.rows
        })
    }
    async createEmployee(req,res){
        const {isAdmin,password,FIO_Employee,Category,Speciality} = req.body;
        try{
            const hashPassword = await bcrypt.hash(password,3);
            const employee = await Employee.create({
                isAdmin,
                password: hashPassword,
                FIO_Employee,
                Category,
                Speciality,
            })
            return res.status(200).json(employee);
        } catch (e){
            return res.status(500).json({ message: `Internal server error: ${error}` });
        }
    }
}
module.exports = new EmployeeController();