'use strict';
const {
  	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Event extends Model {
		/**
		* Helper method for defining associations.
		* This method is not a part of Sequelize lifecycle.
		* The `models/index` file will call this method automatically.
		*/
		static associate(models) {
		// define association here
		}
	}
	Event.init({
		title: DataTypes.STRING,
		desc: DataTypes.TEXT,
		imgUrl: DataTypes.STRING,
		takesPlaceOn: DataTypes.DATE
	}, {
		sequelize,
		modelName: 'Event',
	});

	Event.associate = function(models) {
		Event.hasMany(models.Rsvp);
		Event.hasMany(models.Comment);
		Event.belongsTo(models.User);
	};
  return Event;
};