import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login (username) {
      console.log(username);
    }
  }
});
