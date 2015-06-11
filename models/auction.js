App.Auction = DS.Model.extend({
  name: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
