import Sequelize from 'sequelize';
const sequelize = new Sequelize('db_conversations', null, null,{
dialect:'sqlite',
define:{
  underscored:true,
},
operatorsAliases:Sequelize.Op,
storage:'./db_conversations.sqlite'
});

const models ={
  Users: sequelize.import('./users'),
  Teams: sequelize.import('./teams')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;