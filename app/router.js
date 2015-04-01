import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('homepage', { path: '/' });
  this.resource('talk', { path: 'talks/:talk_id' });
});

export default Router;
