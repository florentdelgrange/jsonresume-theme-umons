var fs = require("fs");
var path = require('path')
var Handlebars = require("handlebars");
var Moment = require("moment");
var helpers = require('./lib/helpers');

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
		resume: resume
	});
}

module.exports = {
	render: render
};

Handlebars.registerHelper("prettifyDate", function(resumeDate) {
  if (!resumeDate) {
    return 'Present';
  }
  var newDate = Moment(resumeDate).format('MMM YYYY');
  return newDate;
});

Handlebars.registerHelper(helpers);
