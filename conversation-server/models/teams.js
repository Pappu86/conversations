export default (sequelize, DataTypes)=>{
	const Teams=sequelize.define('teams',{		
		username:{
			type:DataTypes.STRING,
			unique:true
		},
		email:{
			type:DataTypes.STRING,
			unique:true			
		},
		password:DataTypes.STRING
	});
};

Teams.associate =(models)=>{
	Teams.belongsToMany(models.Teams,{
		through:'members',
		foreignKey:'userId'
	});

	return Teams;
};