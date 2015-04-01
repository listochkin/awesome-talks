import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('homepage', { path: '/' });
  this.route('talk/add', { path: 'talks/add' });
  this.resource('talk', { path: 'talks/:talk_id' });
  this.route('login');
});

export default Router;
