/*
 |--------------------------------------------------------------------------
 | Variable
 |--------------------------------------------------------------------------
 */
	const mongoose = require( 'mongoose' );

/*
 |--------------------------------------------------------------------------
 | Schema
 |--------------------------------------------------------------------------
 */
	const EstSchema = mongoose.Schema( {
		NATIONAL 		: String,
		REGION_CODE 	: String,
		COMP_CODE 		: String,
		EST_CODE 		: String,
		EST_NAME 		: String,
		WERKS 			: String,
		CITY 			: String,
		START_VALID 	: {
			type 			: Number,
			get 			: v => Math.floor( v ),
			set 			: v => Math.floor( v ),
			alias 			: 'i',
			default 		: function() {
				return null;
			}
		},
		END_VALID 		: {
			type 			: Number,
			get 			: v => Math.floor( v ),
			set 			: v => Math.floor( v ),
			alias 			: 'i',
			default 		: function() {
				return null;
			}
		},
		INSERT_TIME 	: {
			type 			: Number,
			get 			: v => Math.floor( v ),
			set 			: v => Math.floor( v ),
			alias 			: 'i',
			default 		: function() {
				return null;
			}
		},
		UPDATE_TIME 	: {
			type 			: Number,
			get 			: v => Math.floor( v ),
			set 			: v => Math.floor( v ),
			alias 			: 'i',
			default 	: function() {
				return null;
			}
		},
		DELETE_TIME 	: {
			type 			: Number,
			get 			: v => Math.floor( v ),
			set 			: v => Math.floor( v ),
			alias 			: 'i',
			default 	: function() {
				return null;
			}
		}
	});

/*
|--------------------------------------------------------------------------
| Module Exports
|--------------------------------------------------------------------------
*/
	module.exports = mongoose.model( 'Est', EstSchema, 'TM_EST' );