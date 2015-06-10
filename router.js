App.Router.map(function() {
  this.resource('items', {path: '/'});
  this.resource('item', {path: 'items/:item_id'});
  this.resource('new-item');
});
