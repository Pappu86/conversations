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
  users: sequelize.import('./users'),
  members: sequelize.import('./members'),
  teams: sequelize.import('./teams'),
  messages: sequelize.import('./messages'),
  channels: sequelize.import('./channels')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;