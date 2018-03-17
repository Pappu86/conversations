export default (sequelize, DataTypes) => {
	const Channel = sequelize.define('channel', {
		name: DataTypes.STRING,
		public: DataTypes.BOOLEAN,
	},{
		underscored: true
	});

	Channel.associate=(models)=>{
		Channel.belongsTo(models.Team,{
			foreignKey:{
				name:'temaId',
				field:'tema_id'
			}
		});
	}

	return Channel;
}