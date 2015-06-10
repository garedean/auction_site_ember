App.NewItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        title: this.get('title')
      });

      newItem.save();
      this.transitionToRoute('items');
    }
  }
});
