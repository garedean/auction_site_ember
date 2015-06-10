App.Router.map(function() {
  this.resource('items', {path: '/'});
  this.resource('item', {path: 'items/:item_id'});
  this.resource('new-item');
  this.resource('auctions');
  this.resource('new-auction');
  this.resource('auction', {path: 'auctions/:auction_id'})
});
