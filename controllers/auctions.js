App.AuctionsController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
