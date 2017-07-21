var require = meteorInstall({"lib":{"router.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/router.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
FlowRouter.route('/blog/:postId', {                                  // 1
  action: function (params, queryParams) {                           // 2
    console.log("YUHUUUUUUU : ", params.postId);                     // 3
  }                                                                  // 4
});                                                                  // 1
FlowRouter.go('/blog/my-post-id');                                   // 6
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
