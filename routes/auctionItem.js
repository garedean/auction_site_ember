App.AuctionItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('auctionItem', params.auctionItem_id);
  }
})
