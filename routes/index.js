
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Evbogue.com' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About Ev Bogue'});
};