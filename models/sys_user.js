const Sequelize = require('sequelize')
const sequelize = require('../config/squelize')

/* 系统用户 */
const Sys_user = sequelize.define('sys_user', {
	user_id: {
		type: Sequelize.BIGINT(32),
		primaryKey: true,
		allowNull: false
	},
	avatar: {
		type: Sequelize.STRING(1024)
	},
	name: {
		type: Sequelize.STRING(32),
		allowNull: false
	},
	mobile: {
		type: Sequelize.STRING(16),
		allowNull: false
	},
	password: {
		type: Sequelize.STRING(255),
		allowNull: false
	},
	role_id: {
		type: Sequelize.BIGINT(32)
	},
	is_disabled: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
	create_user_id: {
		type: Sequelize.STRING(32)
	},
	update_user_id: {
		type: Sequelize.STRING(32)
	},
	create_time: {
		type: Sequelize.DATE(),
		defaultValue: new Date()
	},
	update_time: {
		type: Sequelize.DATE(),
		defaultValue: new Date()
	}
})

module.exports = Sys_user