var require = meteorInstall({"lib":{"router.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/router.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
// FlowRouter.route('/blog/:postId', {                               // 1
//     action: function(params, queryParams) {                       // 2
//       console.log("Params:", params);                             // 3
//       console.log("Query Params:", queryParams);                  // 4
//     },                                                            // 5
//     // name: "<name for the route>" // optional                   // 6
//                                                                   // 7
// });                                                               // 8
//                                                                   // 9
// FlowRouter.go('/blog/my-post-id?comments=on&color=dark');         // 10
var adminRoutes = FlowRouter.group({                                 // 13
  prefix: '/admin',                                                  // 14
  name: 'admin',                                                     // 15
  triggersEnter: [function (context, redirect) {                     // 16
    console.log('running group triggers');                           // 17
  }]                                                                 // 18
}); // handling /admin route                                         // 13
                                                                     //
adminRoutes.route('/', {                                             // 22
  action: function () {                                              // 23
    BlazeLayout.render('componentLayout', {                          // 24
      content: 'admin'                                               // 24
    });                                                              // 24
  },                                                                 // 25
  triggersEnter: [function (context, redirect) {                     // 26
    console.log('running /admin trigger');                           // 27
  }]                                                                 // 28
}); // handling /admin/posts                                         // 22
                                                                     //
adminRoutes.route('/posts', {                                        // 32
  action: function () {                                              // 33
    BlazeLayout.render('componentLayout', {                          // 34
      content: 'posts'                                               // 34
    });                                                              // 34
  }                                                                  // 35
});                                                                  // 32
///////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
Meteor.startup(function () {// code to run on server at startup      // 3
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/router.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
