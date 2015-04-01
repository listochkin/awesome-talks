import Ember from 'ember';

export default Ember.Component.extend({
  username: null,

  actions: {
    login (username) {
      this.sendAction('onLogin', username);
    }
  }
});
