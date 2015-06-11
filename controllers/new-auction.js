App.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name')
      });

      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
