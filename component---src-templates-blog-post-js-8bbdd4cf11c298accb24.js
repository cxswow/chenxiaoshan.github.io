webpackJsonp([0x620f737b6699],{208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return e.raw=t,e}t.__esModule=!0,t.pageQuery=void 0;var u=o(["\n  margin: 0;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 700px) {\n    width: 700px;\n  }\n\n  @media (max-width: 500px) {\n    width: 500px;\n  }\n"],["\n  margin: 0;\n  display: -webkit-flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 700px) {\n    width: 700px;\n  }\n\n  @media (max-width: 500px) {\n    width: 500px;\n  }\n"]),f=n(2),d=a(f),p=n(41),c=a(p),m=n(22),s=a(m),h=n(23),w=a(h),y=n(58),g=a(y),x=w.default.div(u),b=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.data.markdownRemark;console.log(t);var n=void 0,a=void 0;if(this.props.data.markdownRemark.fields.tagSlugs){var r=this.props.data.markdownRemark.fields.tagSlugs;n=r.map(function(t,n){var a=n<r.length-1&&d.default.createElement("span",null," | ");return d.default.createElement("span",{key:t},d.default.createElement(s.default,{to:t},e.props.data.markdownRemark.frontmatter.tags[n]),a)}),a=d.default.createElement("em",null,"标签：",n)}return d.default.createElement(x,null,d.default.createElement(c.default,{title:""+t.frontmatter.title,meta:[{name:"description",content:t.excerpt}]}),d.default.createElement(g.default,null),d.default.createElement("div",null,d.default.createElement("h1",null,t.frontmatter.title),d.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),a,d.default.createElement("p",null,t.frontmatter.date)))},t}(d.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-8bbdd4cf11c298accb24.js.map