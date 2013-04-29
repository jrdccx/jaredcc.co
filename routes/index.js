
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com | Node.js and Technical Writing deployed by Ev Bogue' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About | Ev Bogue'});
};

exports.oldshit = function(req, res){
  res.render('oldshit', { title: 'Buy my old Shit | Ev Bogue'});
};

exports.writing = function(req, res){
  res.render('writing', { title: 'Writing | Ev Bogue'});
};