App.AuctionItemsController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    }
  }
});
