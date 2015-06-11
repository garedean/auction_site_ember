App.AuctionController = Ember.ObjectController.extend({
  showItems: true,

  actions: {
    addItem: function() {
      this.set('showItems', false)
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    }
  }
});
