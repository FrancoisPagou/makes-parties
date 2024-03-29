// migration

'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn(
			'Events', // name of source model
			'userId', // name of key we are adding
			{ 
				type: Sequelize.INTEGER,
				references: { //Required field
					model: 'Users',
					key: 'id'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			}
		);
	},

    down: (queryInterface, Sequelize) => {
      	return queryInterface.removeColumn('Comments', 'userId');
    }
};