import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  attemptedTransition: null,

  isLoggedIn: Ember.computed.notEmpty('user')
});
