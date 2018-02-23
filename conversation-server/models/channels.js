export default (sequelize, DataTypes)=>{
	const Channels=sequelize.define('channels',{		
		name:DataTypes.STRING,
		public:DataTypes.BOOLEAN
	});
};

Channels.associate =(models)=>{
	Channels.belongsTo(models.Teams,{
		foreignKey:'teamId'
	});

	return Channels;
};