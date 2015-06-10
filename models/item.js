App.Item = DS.Model.extend({
  title:            DS.attr(),
  description:      DS.attr(),
  owner:            DS.attr(),
  bidNumber:        DS.attr(),
  estStartingPrice: DS.attr(),
  itemHistory:      DS.attr(),
  image:            DS.attr(),
  yearAcquired:     DS.attr(),
  category:         DS.attr()
});
