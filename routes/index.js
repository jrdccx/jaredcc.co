
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com | Ev Bogue dot com' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About Ev Bogue'});
};

exports.oldshit = function(req, res){
  res.render('oldshit', { title: 'Buy my old Shit | Ev Bogue'});
};