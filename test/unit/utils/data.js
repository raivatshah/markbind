module.exports.LAYOUT_FILES_DEFAULT = [
  'footer.md',
  'head.md',
  'header.md',
  'navigation.md',
  'styles.css',
];

module.exports.LAYOUT_SCRIPTS_DEFAULT = 'MarkBind.afterSetup(() => {\n'
+ '  // Include code to be called after MarkBind setup here.\n'
+ '});\n';

module.exports.PAGE_EJS = '<!DOCTYPE html>\n'
  + '<html>\n'
  + '<head>\n'
  + '    <%- headFileTopContent %>\n'
  + '    <meta charset="utf-8">\n'
  + '    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n'
  + '    <meta name="viewport" content="width=device-width, initial-scale=1">\n'
  + '    <title><%= title %></title>\n'
  + '    <link rel="stylesheet" href="<%- asset.bootstrap %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.bootstrapVue %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.fontAwesome %>" >\n'
  + '    <link rel="stylesheet" href="<%- asset.glyphicons %>" >\n'
  + '    <link rel="stylesheet" href="<%- asset.highlight %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.markbind %>">\n'
  + '    <link rel="stylesheet" href="<%- asset.layoutStyle %>">\n'
  + '    <% if (siteNav) { %><link rel="stylesheet" href="<%- asset.siteNavCss %>"><% } %>\n'
  + '    <%- headFileBottomContent %>\n'
  + '    <% if (faviconUrl) { %><link rel="icon" href="<%- faviconUrl %>"><% } %>\n'
  + '</head>\n'
  + '<body>\n'
  + '<div id="app">\n'
  + '    <%- content %>\n'
  + '</div>\n'
  + '</body>\n'
  + '<script src="<%- asset.vue %>"></script>\n'
  + '<script src="<%- asset.vueStrap %>"></script>\n'
  + '<script src="<%- asset.polyfillJs %>"></script>\n'
  + '<script src="<%- asset.bootstrapVueJs %>"></script>\n'
  + '<script>\n'
  + '    const baseUrl = \'<%- baseUrl %>\'\n'
  + '</script>\n'
  + '<script src="<%- asset.setup %>"></script>\n'
  + '<script src="<%- asset.layoutScript %>"></script>\n'
  + '</html>\n';

module.exports.SITE_JSON_DEFAULT = '{\n'
  + '  "baseUrl": "",\n'
  + '  "titlePrefix": "",\n'
  + '  "ignore": [\n'
  + '    "_markbind/layouts/*",\n'
  + '    "_markbind/logs/*",\n'
  + '    "_site/*",\n'
  + '    "site.json",\n'
  + '    "*.md",\n'
  + '    "*.mbd",\n'
  + '    "*.mbdf",\n'
  + '    "*.njk",\n'
  + '    ".git/*"\n'
  + '  ],\n'
  + '  "pages": [\n'
  + '    {\n'
  + '      "src": "index.md",\n'
  + '      "title": "Hello World"\n'
  + '    },\n'
  + '    {\n'
  + '      "glob" : "**/index.md"\n'
  + '    },\n'
  + '    {\n'
  + '      "glob" : "**/*.+(md|mbd)"\n'
  + '    }\n'
  + '  ],\n'
  + '  "deploy": {\n'
  + '    "message": "Site Update."\n'
  + '  }\n'
  + '}\n';

module.exports.ABOUT_MD_DEFAULT = '# About\n'
  + 'Welcome to your **About Us** page.\n';

module.exports.FOOTER_MD_DEFAULT = '<footer>\n'
  + '  <div class="text-center">\n'
  + '    This is a dynamic height footer that supports markdown <md>:smile:</md>!\n'
  + '  </div>\n'
  + '  <!-- Support MarkBind by including a link to us on your landing page! -->\n'
  + '  <div class="text-center">\n'
  + '    <small>[Generated by {{MarkBind}} on {{timestamp}}]</small>\n'
  + '  </div>\n'
  + '</footer>\n';

module.exports.HEADER_MD_DEFAULT = '<header>\n'
  + '  <div class="bg-primary display-4 text-center text-white">\n'
  + '    <br>\n'
  + '    Start authoring your MarkBind website.\n'
  + '    <br>\n'
  + '    <br>\n'
  + '  </div>\n'
  + '</header>\n';

module.exports.INDEX_MD_DEFAULT = '<frontmatter>\n'
  + '  title: "Hello World"\n'
  + '  footer: footer.md\n'
  + '  header: header.md\n'
  + '  siteNav: site-nav.md\n'
  + '</frontmatter>\n\n'
  + '# Hello world\n'
  + 'Welcome to your page generated with MarkBind.\n';

module.exports.SITE_NAV_MD_DEFAULT = '<navigation>\n'
  + '* [Home :glyphicon-home:]({{baseUrl}}/index.html)\n'
  + '</navigation>\n';

module.exports.TOP_NAV_DEFAULT = '<header><navbar placement="top" type="inverse">\n'
  + '  <a slot="brand" href="{{baseUrl}}/index.html" title="Home" class="navbar-brand">'
  + '<i class="far fa-file-image"></i></a>\n'
  + '  <li><a href="{{baseUrl}}/index.html" class="nav-link">HOME</a></li>\n'
  + '  <li><a href="{{baseUrl}}/about.html" class="nav-link">ABOUT</a></li>\n'
  + '  <li slot="right">\n'
  + '    <form class="navbar-form">\n'
  + '      <searchbar :data="searchData" placeholder="Search" :on-hit="searchCallback"'
  + ' menu-align-right></searchbar>\n'
  + '    </form>\n'
  + '  </li>\n'
  + '</navbar></header>';

module.exports.USER_VARIABLES_DEFAULT = '<variable name="example">\n'
  + 'To inject this HTML segment in your markbind files, use {{ example }} where you want to place it.\n'
  + 'More generally, surround the segment\'s id with double curly braces.\n'
  + '</variable>';
