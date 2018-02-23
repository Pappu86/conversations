export default (sequelize, DataTypes)=>{
	const Messages=sequelize.define('messages',{		
		text:DataTypes.STRING
	});
};

Messages.associate =(models)=>{
	Messages.belongsTo(models.Channels,{
		foreignKey:'channelId'
	});

	Messages.belongsToMany(models.Users,{
		foreignKey:'userId'
	});

	return Messages;
};