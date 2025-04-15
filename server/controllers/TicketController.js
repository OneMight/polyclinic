const { where } = require('sequelize');
const {Ticket} = require('../models/model');
const {Patience} = require('../models/model')
class TicketController{
    async getTickets(req,res){
        const { sortBy = 'idTicket', order = 'ASC'} = req.query;
        const where = {}
        const tickets = await Ticket.findAndCountAll({
            where,
            order: [[sortBy,order]]
        });
        return res.json({
            total: tickets.count,
            data: tickets.rows
        })
    }
    async createTicket(req,res){
        const {cost, goal, date, FIO_Patience} = req.body;
        try{
            const patience = await Patience.findOne({
                where:{
                    FIO_Patience: FIO_Patience,
                }
            })
            console.error(patience);
            const ticket = await Ticket.create({
                cost,
                goal,
                date,
                idPatience: patience.idPatience,
            })
            return res.status(200).json(ticket);
        } catch(e){
            return res.status(500).json('Internal server error '+e);
        }
    }
}
module.exports = new TicketController();