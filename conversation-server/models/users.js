export default (sequelize, DataTypes)=>{
	const Users=sequelize.define('users',{		
		username:{
			type:DataTypes.STRING,
			unique:true,
			validate:{
				isAlphanumeric:{
					args:true,
					msg:'The user name can only contain letters and numbers',
				},
				len:{
					args:[3,30],
					msg:'The username needs to be between 3 and 30 characters long'
				}
			}
		},
		email:{
			type:DataTypes.STRING,
			unique:true,
			validate: {
				isEmail:{
					args:true,
					msg:'Invaild email'
				}
			}
		},
		password:{
			type:DataTypes.STRING,			
			validate:{
				len:{
					args:[5,100],
					msg:'The password needs to be between 5 and 100 characters long'
				}
			}
		}

	});
};

Users.associate =(models)=>{
	Users.belongsToMany(models.Teams,{
		through:'members',
		foreignKey:'userId'
	});

	return Users;
};