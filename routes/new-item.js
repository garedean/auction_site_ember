App.NewItemRoute = Ember.Route.extend({
  model: function(params) {
    var auction = this.modelFor('auction');
    var item    = this.store.createRecord('item');
    auction.get('items').then(function(items) {
      items.pushObject(item);
    });
    return item;
  }
});
