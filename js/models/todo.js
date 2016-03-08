/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			if (this.get('title').indexOf('--done') > -1) {
				this.save({
					title: this.get('title').replace(/ --done/,''),
					completed: !this.get('completed')
				});
			} else {
				this.save({
					title: this.get('title') + ' --done',
					completed: !this.get('completed')
				});
			}
		}
	});
})();
