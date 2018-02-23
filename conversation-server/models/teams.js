export default (sequelize, DataTypes)=>{
	const Teams=sequelize.define('teams',{		
		name:{
			type:DataTypes.STRING,
			unique:true
		}
	});
};

Teams.associate =(models)=>{
	Teams.belongsToMany(models.Users,{
		through:'members',
		foreignKey:{
			name:'teamId',
			field:'team_id'
		}
	});

	Teams.belongsTo(models.Users,{
		foreignKey:'owner'
	});

	return Teams;
};