App.Auction = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
