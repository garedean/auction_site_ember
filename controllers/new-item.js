App.NewItemController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      App.AuctionController.set('showItems', false);
      debugger;
      var item = this.get('model');
      item.save();

      var controller = this;
      item.get('auction').then(function(auction) {
        auction.save();
        controller.transitionToRoute('auction', auction);
      });
    }
  }
});
