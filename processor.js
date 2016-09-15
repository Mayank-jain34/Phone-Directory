var babel = require("babel-core");
var reactTemplates = require("react-templates");

module.exports = {
    isReactTemplate: function(filename) {
      return filename.indexOf("node_modules") === -1 && filename.indexOf(".rt") != -1;
    },
    transformTemplate: function(src) {
      return reactTemplates.convertTemplateToReact(src, {modules: "commonjs"});
    },
    process: function(src, filename) {
      // Allow the stage to be configured by an environment
      // variable, but use Babel's default stage (2) if
      // no environment variable is specified.
      var stage = process.env.BABEL_JEST_STAGE || 2;

      // Ignore all files within node_modules
      // babel files can be .js, .es, .jsx or.es6
      var isTemplate = this.isReactTemplate(filename);
      if (filename.indexOf("node_modules") === -1 && (babel.canCompile(filename) || isTemplate)) {
          return babel.transform(isTemplate ? this.transformTemplate(src) : src, {
            filename: filename,
            stage: stage,
            retainLines: true,
            auxiliaryCommentBefore: "istanbul ignore next"
          }).code;
        }
        return src;
      }
    };
