App.Router.map(function() {
  this.resource('auctionItems', {path: '/'});
  this.resource('auctionItem', {path: 'auctionItems/:auctionItem_id'});
});
