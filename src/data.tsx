import Translate, { translate } from '@docusaurus/Translate'
import React from 'react'

const baseUrl = '/docs/'

// 首页导航栏
export const guideCardData = [
  {
    title: translate({ message: 'Getting started' }),
    icon: 'homepage/get-started.svg',
    description: translate({
      message:
        'Before you start working with ONES Open  Platform, learn our guide for more details.',
    }),
    tips: translate({ message: 'Learn details' }),
    url: 'docs/guide/overview',
  },
  {
    title: translate({ message: 'API documents' }),
    icon: 'homepage/api-documents.svg',
    description: translate({
      message: 'Find out what is possible with ONES  API and how to realize data connection.',
    }),
    tips: translate({ message: 'Learn details' }),
    url: 'docs/openapi',
  },
  {
    title: translate({ message: 'Get to know the abilities' }),
    icon: 'homepage/open-platform.svg',
    description: translate({
      message: 'ONES Open Platform provides advanced customization capabilities.',
    }),
    tips: translate({ message: 'Learn details' }),
    url: 'docs/abilities/basic',
  },
]

// 能力卡片
export const abilityCardData = [
  {
    title: translate({ message: 'Core' }),
    icon: 'homepage/capabilities.svg',
    description: translate({
      message: 'ONES Open Platform provides standard infrastructure for applications.',
    }),
    tips: translate({ message: 'See more' }),
    keyword: [
      translate({ message: 'Database' }),
      translate({ message: 'Notifications' }),
      translate({ message: 'Audit log' }),
    ],
    url: 'docs/abilities/basic',
  },
  {
    title: translate({ message: 'Slots' }),
    icon: 'homepage/slot.svg',
    description: translate({
      message:
        'Slots enable developers to add, hide, or replace custom content in navigation bars or page elements.',
    }),
    tips: translate({ message: 'See more' }),
    keyword: [
      translate({ message: 'System sider bar slot' }),
      translate({ message: 'My work top bar slot' }),
      translate({ message: 'System configuration slot' }),
    ],
    url: 'docs/abilities/slot',
  },
  {
    title: translate({ message: 'App Modules' }),
    icon: 'homepage/app-modules.svg',
    description: translate({
      message:
        'App modules empower developers to carry out extended development of specific features of ONES products and applications.',
    }),
    tips: translate({ message: 'See more' }),
    keyword: [
      translate({ message: 'Account: Simple Auth' }),
      translate({ message: 'Project: Custom Script Field' }),
      translate({ message: 'Project: Custom Permission' }),
    ],
    url: 'docs/abilities/business',
  },
]

/** 学习路径 */
export const learnings: {
  /** 步骤标题 */
  stepTitle: React.ReactNode
  /** 步骤描述 */
  description: React.ReactNode
  /** 文章列表 */
  docsList?: {
    /** 起始标题 */
    itemTitle: React.ReactNode

    docList: {
      /** 文档标题 */
      docTitle: React.ReactNode
      /** 文档地址 */
      url: string
    }[]
  }[]
}[] = [
  {
    stepTitle: <Translate>Overview</Translate>,
    description: (
      <Translate>
        You can first understand the basics of development to facilitate a quick start.
      </Translate>
    ),
    docsList: [
      {
        itemTitle: <Translate>Basic Introduction</Translate>,
        docList: [
          {
            docTitle: <Translate>Basic</Translate>,
            url: `${baseUrl}guide/overview`,
          },
          {
            docTitle: <Translate>Plugin types</Translate>,
            url: `${baseUrl}guide/type`,
          },
        ],
      },
    ],
  },
  {
    stepTitle: <Translate>Prepare</Translate>,
    description: (
      <Translate>
        Environmental installation is an important preparatory work before the development of open
        platform plugin.
      </Translate>
    ),
    docsList: [
      {
        itemTitle: <Translate>Environment building</Translate>,
        docList: [
          {
            docTitle: <Translate>Installation</Translate>,
            url: `${baseUrl}guide/install`,
          },
        ],
      },
    ],
  },
  {
    stepTitle: <Translate>Development</Translate>,
    description: (
      <Translate>
        You can follow the development process to start developing your application.
      </Translate>
    ),
    docsList: [
      {
        itemTitle: <Translate>Experience</Translate>,
        docList: [
          {
            docTitle: <Translate>Create plugin</Translate>,
            url: `${baseUrl}guide/create`,
          },
          {
            docTitle: <Translate>Plugin structure</Translate>,
            url: `${baseUrl}guide/structure`,
          },
          {
            docTitle: <Translate>Development</Translate>,
            url: `${baseUrl}guide/development`,
          },
          {
            docTitle: <Translate>Ability usage</Translate>,
            url: `${baseUrl}guide/abilities`,
          },
        ],
      },
      {
        itemTitle: <Translate>Advanced</Translate>,
        docList: [
          {
            docTitle: <Translate>Lifecycle</Translate>,
            url: `${baseUrl}guide/lifecycle`,
          },
        ],
      },
    ],
  },
  {
    stepTitle: <Translate>Packaged</Translate>,
    description: <Translate>Quickly generate a package and install it to ONES</Translate>,
    docsList: [
      {
        itemTitle: <Translate>Release plugin</Translate>,
        docList: [
          {
            docTitle: <Translate>Package plugin</Translate>,
            url: `${baseUrl}guide/package`,
          },
          {
            docTitle: <Translate>CI</Translate>,
            url: `${baseUrl}guide/deploy`,
          },
        ],
      },
    ],
  },
  {
    stepTitle: <Translate>Management</Translate>,
    description: <Translate>Manage your plugin</Translate>,
    docsList: [
      {
        itemTitle: <Translate>Usage</Translate>,
        docList: [
          {
            docTitle: <Translate>Upgrade</Translate>,
            url: `${baseUrl}guide/upgrade`,
          },
        ],
      },
    ],
  },
]
