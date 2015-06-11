App.AuctionController = Ember.ObjectController.extend({
  showItems: true,

  actions: {
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    }
  }
});
