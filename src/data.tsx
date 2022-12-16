import React from 'react'
import Translate from '@docusaurus/Translate'
import type { ContentEnum } from './components/homepage/features'

const baseUrl = '/docs/next/'

/** 首页功能列表 */
export const features: {
  /** 分类标题 */
  title: React.ReactNode
  /** features 类型：开放能力 ｜ 工具与资源 */
  type: ContentEnum
  /** 卡片信息 */
  cards: {
    /** 卡片标题 */
    cardTitle: React.ReactNode
    /** 卡片中每一项 */
    cardList: {
      /** 卡片中每一项的标题 */
      label: React.ReactNode
      /** 卡片中每一项指向的地址 */
      url: string
    }[]
  }[]
}[] = [
  {
    title: <Translate>Open Abilities</Translate>,
    type: 0,
    cards: [
      {
        cardTitle: <Translate>Slots</Translate>,
        cardList: [
          {
            /** 应用插槽 */
            label: <Translate>App slot</Translate>,
            url: `${baseUrl}abilities/slot/app`,
          },
          {
            /** 全局插槽 */
            label: <Translate>Global slot</Translate>,
            url: `${baseUrl}abilities/slot/global`,
          },
          {
            /** 我的工作台 */
            label: <Translate>My work</Translate>,
            url: `${baseUrl}abilities/slot/module/my-work`,
          },
          {
            /** 项目管理 */
            label: <Translate>ONES Project</Translate>,
            url: `${baseUrl}abilities/slot/module/project`,
          },
          {
            /** 知识库管理 */
            label: <Translate>ONES Wiki</Translate>,
            url: '#',
          },
          {
            /** 项目集管理 */
            label: <Translate>ONES Plan</Translate>,
            url: `${baseUrl}abilities/slot/module/plan`,
          },
          {
            /** 测试管理 */
            label: <Translate>ONES TestCase</Translate>,
            url: `${baseUrl}abilities/slot/module/testcase`,
          },
          {
            /** 流水线管理 */
            label: <Translate>ONES Pipeline</Translate>,
            url: `${baseUrl}abilities/slot/module/pipeline`,
          },
          {
            /** 工单管理 */
            label: <Translate>ONES Desk</Translate>,
            url: `${baseUrl}abilities/slot/module/desk`,
          },
          {
            /** 工单门户 */
            label: <Translate>ONES DeskHome</Translate>,
            url: `${baseUrl}abilities/slot/module/desk-home`,
          },
          {
            /** 效能管理 */
            label: <Translate>ONES Performance</Translate>,
            url: `${baseUrl}abilities/slot/module/performance`,
          },
          {
            /** 产品管理 */
            label: <Translate>Product Management</Translate>,
            url: `${baseUrl}abilities/slot/module/product`,
          },
          {
            /** 工时管理 */
            label: <Translate>Worklog Management</Translate>,
            url: `${baseUrl}abilities/slot/module/worklog`,
          },
          {
            /** 版本管理 */
            label: <Translate>Version Management</Translate>,
            url: `${baseUrl}abilities/slot/module/version`,
          },
          {
            /** 配置中心 */
            label: <Translate>Configuration</Translate>,
            url: '#',
          },
          {
            /** 个人中心 */
            label: <Translate>Account</Translate>,
            url: `${baseUrl}abilities/slot/module/account`,
          },
          {
            /** 组织管理 */
            label: <Translate>Organization settings</Translate>,
            url: '#',
          },
          {
            /** 登录 */
            label: <Translate>Login</Translate>,
            url: `${baseUrl}abilities/slot/module/login`,
          },
        ],
      },
      {
        cardTitle: <Translate>Basic</Translate>,
        cardList: [
          {
            /** 日志 */
            label: <Translate>Log</Translate>,
            url: `${baseUrl}abilities/basic/openAbility-pluginLog`,
          },
          {
            /** 超级用户 */
            label: <Translate>Super admin</Translate>,
            url: `${baseUrl}abilities/basic/super-admin`,
          },
          {
            /**  文件操作 */
            label: <Translate>File Operation</Translate>,
            url: '#',
          },
          {
            /** 数据库 */
            label: <Translate>Database</Translate>,
            url: `${baseUrl}abilities/basic/database`,
          },

          {
            /** 错误处理 */
            label: <Translate>Error handling</Translate>,
            url: `${baseUrl}abilities/basic/error-handling`,
          },
          // {
          //   /** 多语言-国际化 */
          //   label: <Translate>Internationalization</Translate>,
          //   url: `${baseUrl}guide/abilities/multilingual`,
          // },
          {
            /** 通知 */
            label: <Translate>Notifications</Translate>,
            url: '#',
          },
          {
            /** 网络请求 */
            label: <Translate>Request</Translate>,
            url: `${baseUrl}abilities/basic/network-request`,
          },
          {
            /** 定时器 */
            label: <Translate>Timer</Translate>,
            url: '#',
          },
          {
            /** 自定义配置 */
            label: <Translate>Custom configuration</Translate>,
            url: `${baseUrl}abilities/basic/custom-config`,
          },
        ],
      },
      {
        cardTitle: <Translate>Business</Translate>,
        cardList: [
          {
            /** ONES 接口 */
            label: <Translate>ONES interface</Translate>,
            url: `${baseUrl}abilities/business/ONES-API`,
          },
          {
            /** 属性 */
            label: <Translate>Field</Translate>,
            url: `${baseUrl}abilities/business/field`,
          },
          {
            /** 工作项 */
            label: <Translate>Issue</Translate>,
            url: `${baseUrl}abilities/business/issue`,
          },
          {
            /** 权限点 */
            label: <Translate>Permission</Translate>,
            url: '#',
          },

          {
            /** Account */
            label: 'Account',
            url: `${baseUrl}abilities/business/account`,
          },
          {
            /** issue 处理器 */
            label: <Translate>Issue processor</Translate>,
            url: '#',
          },
          {
            /** 托管独立应用 */
            label: <Translate>Independent hosting service</Translate>,
            url: `${baseUrl}abilities/business/Independent-hosting-service`,
          },
          {
            /** 文件解析 */
            label: <Translate>File parsing</Translate>,
            url: '#',
          },
          {
            /** ONES project 自定义组件 */
            label: <Translate>ONES project Custom component</Translate>,
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: <Translate>Tools and Resources</Translate>,
    type: 1,
    cards: [
      {
        cardTitle: <Translate>ONES CLI</Translate>,
        cardList: [
          {
            label: (
              <Translate>
                ONES CLI is a command line interface tool that helps developers build ONES open
                platform plugin.
              </Translate>
            ),
            url: `${baseUrl}tools/cli`,
          },
        ],
      },
      {
        cardTitle: <Translate>ONES Diagtools</Translate>,
        cardList: [
          {
            label: (
              <Translate>
                ONES Diagtools CLI and ONES Diagtools Desktop are diagnostic tools for open
                platforms.
              </Translate>
            ),
            url: '#',
          },
        ],
      },
      {
        cardTitle: <Translate>ONES Design</Translate>,
        cardList: [
          {
            label: (
              <Translate>
                ONES Design is an Ant Design based React UI component library, which is mainly used
                for the research and development of enterprise level R & D management tools.
              </Translate>
            ),
            url: 'https://bangwork.github.io/ones-design/?path=/story/ones-design--page',
          },
        ],
      },
    ],
  },
]

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
