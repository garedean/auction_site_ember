App.NewItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newItem =       this.store.createRecord('item', {
        title:            this.get('title'),
        description:      this.get('description'),
        owner:            this.get('owner'),
        bidNumber:        this.get('bid-number'),
        estStartingPrice: this.get('est-starting-price'),
        itemHistory:      this.get('item-history'),
        image:            this.get('image'),
        yearAcquired:     this.get('year-acquired'),
        category:         this.get('category')
      });

      newItem.save();
      this.transitionToRoute('items');
    }
  }
});
