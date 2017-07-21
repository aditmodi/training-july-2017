// FlowRouter.route('/blog/:postId', {
//     action: function(params, queryParams) {
//       console.log("Params:", params);
//       console.log("Query Params:", queryParams);
//     },
//     // name: "<name for the route>" // optional
//
// });
//
// FlowRouter.go('/blog/my-post-id?comments=on&color=dark');


var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

// handling /admin route
adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('componentLayout', {content: 'admin'});
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /admin trigger');
  }]
});

// handling /admin/posts
adminRoutes.route('/posts', {
  action: function() {
    BlazeLayout.render('componentLayout', {content: 'posts'});
  }
});
