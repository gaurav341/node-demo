module.exports = function(mongoose) {

	var collection = 'userdata';
	var schema = new mongoose.Schema({		
		name:{
			type:String,
			required: true
		},
		sex:{
			type:String,
        	enum: ["m", "f"],
			required: true
		},
		age:{
			type:String,
       		match: [/^[0-9]*$/, 'Enter a valid age'],
			required: true
		},
		country:{
			type:String,
			required: true
		},
		dateCreated: {
	        type: Date,
	        default: Date.now
		},
		dateUpdated: {
	        type: Date,
	        default: Date.now
		}
	}, {
	    toJSON: {
	        transform: function (doc, ret, options) {
	            delete ret.__v;
	            if (ret.dateCreated)
	                ret.dateCreated = new Date(ret.dateCreated).getTime();
	            if (ret.dateUpdated)
	                ret.dateUpdated = new Date(ret.dateUpdated).getTime();
	        }
	    },
	    timestamps: {
	        createdAt: 'dateCreated',
	        updatedAt: 'dateUpdated'
	    }
	});

	var coll = mongoose.model(collection, schema);
	return coll;

}