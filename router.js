App.Router.map(function() {
  this.resource('auctions', {path: '/'});
  this.resource('auction', {path: ':auction_id'}, function() {
    this.resource('new-item');
  });
  this.resource('new-auction');
  this.resource('items');
  // this.resource('item', {path: 'items/:item_id'});
});
