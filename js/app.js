App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', {path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

var posts = [{
  id: '1',
  title: "Rails is wat",
  author: {name: "kaitlyn"},
  date: new Date('12-27-2012'),
  excerpt: "this is post 1",
  body: "yooooooooo post one body"
}, {
  id: '2',
  title: "Rails number 2",
  author: {name: "kaitlyn"},
  date: new Date('12-29-2012'),
  excerpt: "this is post 2",
  body: "yooooodfvdfgdgdfgdfg2222 2 22 2 2 2 oooo post one body"
}];
