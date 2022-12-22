import React from 'react'
import Translate from '@docusaurus/Translate'

const baseUrl = '/docs/next/'

/** 首页功能列表 */
export const features: {
  /** 分类标题 */
  title: React.ReactNode
  /** 卡片信息 */
  cards: {
    /** 卡片标题 */
    label: React.ReactNode
    /** 工具类型卡片的地址 */
    url?: string
    /** 卡片中每一项 */
    content?:
      | React.ReactNode
      | {
          title: React.ReactNode
          url?: string
        }[]
  }[]
}[] = [
  {
    title: <Translate>Open Abilities</Translate>,
    cards: [
      {
        label: <Translate>Slots</Translate>,
        content: [
          {
            /** 应用插槽 */
            title: <Translate>App slot</Translate>,
            url: `${baseUrl}abilities/slot/app`,
          },
          {
            /** 全局插槽 */
            title: <Translate>Global slot</Translate>,
            url: `${baseUrl}abilities/slot/global`,
          },
          {
            /** 我的工作台 */
            title: <Translate>My work</Translate>,
            url: `${baseUrl}abilities/slot/module/my-work`,
          },
          {
            /** 项目管理 */
            title: <Translate>ONES Project</Translate>,
            url: `${baseUrl}abilities/slot/module/project`,
          },
          {
            /** 知识库管理 */
            title: <Translate>ONES Wiki</Translate>,
            url: '#',
          },
          {
            /** 项目集管理 */
            title: <Translate>ONES Plan</Translate>,
            url: `${baseUrl}abilities/slot/module/plan`,
          },
          {
            /** 测试管理 */
            title: <Translate>ONES TestCase</Translate>,
            url: `${baseUrl}abilities/slot/module/testcase`,
          },
          {
            /** 流水线管理 */
            title: <Translate>ONES Pipeline</Translate>,
            url: `${baseUrl}abilities/slot/module/pipeline`,
          },
          {
            /** 工单管理 */
            title: <Translate>ONES Desk</Translate>,
            url: `${baseUrl}abilities/slot/module/desk`,
          },
          {
            /** 工单门户 */
            title: <Translate>ONES DeskHome</Translate>,
            url: `${baseUrl}abilities/slot/module/desk-home`,
          },
          {
            /** 效能管理 */
            title: <Translate>ONES Performance</Translate>,
            url: `${baseUrl}abilities/slot/module/performance`,
          },
          {
            /** 产品管理 */
            title: <Translate>Product Management</Translate>,
            url: `${baseUrl}abilities/slot/module/product`,
          },
          {
            /** 工时管理 */
            title: <Translate>Worklog Management</Translate>,
            url: `${baseUrl}abilities/slot/module/worklog`,
          },
          {
            /** 版本管理 */
            title: <Translate>Version Management</Translate>,
            url: `${baseUrl}abilities/slot/module/version`,
          },
          {
            /** 配置中心 */
            title: <Translate>Configuration</Translate>,
            url: '#',
          },
          {
            /** 个人中心 */
            title: <Translate>Account</Translate>,
            url: `${baseUrl}abilities/slot/module/account`,
          },
          {
            /** 组织管理 */
            title: <Translate>Organization settings</Translate>,
            url: '#',
          },
          {
            /** 登录 */
            title: <Translate>Login</Translate>,
            url: `${baseUrl}abilities/slot/module/login`,
          },
        ],
      },
      {
        label: <Translate>Basic</Translate>,
        content: [
          {
            /** 日志 */
            title: <Translate>Log</Translate>,
            url: `${baseUrl}abilities/basic/openAbility-pluginLog`,
          },
          {
            /** 超级用户 */
            title: <Translate>Super admin</Translate>,
            url: `${baseUrl}abilities/basic/super-admin`,
          },
          {
            /**  文件操作 */
            title: <Translate>File Operation</Translate>,
            url: '#',
          },
          {
            /** 数据库 */
            title: <Translate>Database</Translate>,
            url: `${baseUrl}abilities/basic/database`,
          },

          {
            /** 错误处理 */
            title: <Translate>Error handling</Translate>,
            url: `${baseUrl}abilities/basic/error-handling`,
          },
          // {
          //   /** 多语言-国际化 */
          //   title: <Translate>Internationalization</Translate>,
          //   url: `${baseUrl}guide/abilities/multilingual`,
          // },
          {
            /** 通知 */
            title: <Translate>Notifications</Translate>,
            url: '#',
          },
          {
            /** 定时器 */
            title: <Translate>Timer</Translate>,
            url: '#',
          },
          {
            /** 自定义配置 */
            title: <Translate>Custom configuration</Translate>,
            url: `${baseUrl}abilities/basic/custom-config`,
          },
        ],
      },
      {
        label: <Translate>Business</Translate>,
        content: [
          {
            /** ONES 接口 */
            title: <Translate>ONES interface</Translate>,
            url: `${baseUrl}abilities/business/ONES-API`,
          },
          {
            /** 属性 */
            title: <Translate>Field</Translate>,
            url: `${baseUrl}abilities/business/field`,
          },
          {
            /** 工作项 */
            title: <Translate>Issue</Translate>,
            url: `${baseUrl}abilities/business/issue`,
          },
          {
            /** 权限点 */
            title: <Translate>Permission</Translate>,
            url: '#',
          },

          {
            /** Account */
            title: 'Account',
            url: `${baseUrl}abilities/business/account`,
          },
          {
            /** issue 处理器 */
            title: <Translate>Issue processor</Translate>,
            url: '#',
          },
          {
            /** 托管独立应用 */
            title: <Translate>Independent hosting service</Translate>,
            url: `${baseUrl}abilities/business/Independent-hosting-service`,
          },
          {
            /** 文件解析 */
            title: <Translate>File parsing</Translate>,
            url: '#',
          },
          {
            /** ONES project 自定义组件 */
            title: <Translate>ONES project Custom component</Translate>,
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: <Translate>Tools and Resources</Translate>,
    cards: [
      {
        label: <Translate>ONES CLI</Translate>,
        url: `${baseUrl}tools/cli`,
        content: (
          <Translate>
            ONES CLI is a command line interface tool that helps developers build ONES open platform
            plugin.
          </Translate>
        ),
      },
      {
        label: <Translate>ONES Diagtools</Translate>,
        url: '#',
        content: (
          <Translate>
            ONES Diagtools CLI and ONES Diagtools Desktop are diagnostic tools for open platforms.
          </Translate>
        ),
      },
      {
        label: <Translate>ONES Design</Translate>,
        url: 'https://bangwork.github.io/ones-design/?path=/story/ones-design--page',
        content: (
          <Translate>
            ONES Design is an Ant Design based React UI component library, which is mainly used for
            the research and development of enterprise level R & D management tools.
          </Translate>
        ),
      },
    ],
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
