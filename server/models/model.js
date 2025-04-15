const {DataTypes} = require('sequelize');
const sequelize = require('../db.js');

const Employee = sequelize.define('Employee', {
    idEmployee:{type: DataTypes.BIGINT, primaryKey:true, autoIncrement: true},
    isAdmin:{type:DataTypes.BOOLEAN, allowNull:false},
    password:{type: DataTypes.STRING, allowNull: false },
    FIO_Employee:{type: DataTypes.STRING, allowNull: false},
    Category:{type: DataTypes.STRING, allowNull: false},
    Speciality:{type: DataTypes.STRING, allowNull: false},
})
const Patience = sequelize.define('Patience', {
    idPatience:{type: DataTypes.BIGINT, primaryKey:true, autoIncrement: true},
    FIO_Patience:{type: DataTypes.STRING, allowNull: false},
    Birthday_date:{type:DataTypes.DATEONLY, allowNull:false},
    Address:{type:DataTypes.STRING, allowNull:true},
    Sex:{type: DataTypes.STRING, allowNull:false},
    discount:{type: DataTypes.STRING, allowNull:false},
    idCard:{type:DataTypes.STRING, allowNull:true},
})
const Ticket = sequelize.define('Ticket',{
    idTicket:{type:DataTypes.BIGINT, autoIncrement:true, primaryKey:true, allowNull:false},
    cost:{type:DataTypes.DECIMAL, allowNull:false},
    goal:{type: DataTypes.STRING, allowNull:false},
    date:{type:DataTypes.DATE, allowNull:false},
    idPatience:{type:DataTypes.BIGINT, allowNull:false},
})
const Appoitment = sequelize.define('Appoitment',{
    idAppoitment:{type:DataTypes.BIGINT, autoIncrement:true, primaryKey:true,  allowNull:false},
    idTicket:{type:DataTypes.BIGINT, allowNull:false},
    diagnose:{type:DataTypes.STRING,allowNull:true},
    idEmployee:{type:DataTypes.BIGINT, allowNull:false},
    idDiagnose:{type:DataTypes.BIGINT, allowNull:false},
})
const Diagnosis = sequelize.define('Diagnosis',{
    idDiagnose:{type:DataTypes.BIGINT, autoIncrement:true, primaryKey:true,  allowNull:false},
    code:{type:DataTypes.STRING, allowNull:false},
    name:{type:DataTypes.STRING, allowNull:false},
})
const Report = sequelize.define('Report',{
    idReport:{type:DataTypes.BIGINT, autoIncrement:true, primaryKey:true, allowNull:false},
    diagnoseName:{type: DataTypes.STRING, allowNull:true},
    cost:{type:DataTypes.DECIMAL, allowNull:false},
    discount:{type: DataTypes.STRING, allowNull:false},
    payed:{type: DataTypes.DECIMAL, allowNull:true},
    idTicket:{type:DataTypes.BIGINT, allowNull:false},
    idTicket:{type:DataTypes.BIGINT, allowNull:false},
})

Employee.hasMany(Appoitment, {
    foreignKey: 'idEmployee',
  });
  
  Appoitment.belongsTo(Employee, {
    foreignKey: 'idEmployee',
    targetKey: 'idEmployee',
  });
  Patience.hasOne(Ticket, {
    foreignKey: 'idPatience',   
    sourceKey: 'idPatience',   
  });
  
  Ticket.belongsTo(Patience, {
    foreignKey: 'idPatience',
    targetKey: 'idPatience',   
  });
  Ticket.hasOne(Appoitment, {
    foreignKey: 'idTicket',
    sourceKey: 'idTicket',
  });
  Appoitment.belongsTo(Ticket, {
    foreignKey: 'idTicket',
    targetKey: 'idTicket',
  });
  
  // Diagnosis → Appoitment (1:M)
  Diagnosis.hasMany(Appoitment, {
    foreignKey: 'idDiagnose',
    sourceKey: 'idDiagnose',
  });
  Appoitment.belongsTo(Diagnosis, {
    foreignKey: 'idDiagnose',
    targetKey: 'idDiagnose',
  });
  
  // Report → Appoitment (1:M)
  Report.hasMany(Appoitment, {
    foreignKey: 'idReport',
    sourceKey: 'idReport',
  });
  Appoitment.belongsTo(Report, {
    foreignKey: 'idReport',
    targetKey: 'idReport',
  });
  
  // Report → Ticket (1:M)
  Report.hasMany(Ticket, {
    foreignKey: 'idReport',
    sourceKey: 'idReport',
  });
  Ticket.belongsTo(Report, {
    foreignKey: 'idReport',
    targetKey: 'idReport',
  });

module.exports = {Employee, Appoitment, Patience, Ticket, Diagnosis, Report}