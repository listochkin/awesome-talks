import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.store.find('talk', params.talk_id);
  }
});
