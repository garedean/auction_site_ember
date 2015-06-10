App.ItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('item', params.item_id);
  }
});

// App.ItemRoute = Ember.Route.extend({
//   model: function(params) {
//     var auction = this.modelFor('auction');
//     var item    = this.store.createRecord('item');
//     auction.get('items').then(function(items) {
//       items.pushObject(item);
//     });
//     return items;
//   }
// });
