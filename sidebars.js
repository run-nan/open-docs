/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  guide: [{ type: 'autogenerated', dirName: 'guide' }],
  abilities: [{ type: 'autogenerated', dirName: 'abilities' }],
  reference: [{ type: 'autogenerated', dirName: 'reference' }],
  tools: [{ type: 'autogenerated', dirName: 'tools' }],
  api: [{ type: 'autogenerated', dirName: 'api' }],
  faq: [{ type: 'autogenerated', dirName: 'faq' }],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
}

module.exports = sidebars
