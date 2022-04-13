import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "低开发成本",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        基于 React +
        Node.js，使用一致的语言进行一体化前后端开发；大量使用声明方式替代撰写代码方式，进一步降低开发者学习成本和开发门槛。
      </>
    ),
  },
  {
    title: "高开发效率",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        重视开发者体验，全方位提供开发者支持，提供全流程开发、调试、环境集成等工具，开发者只需要专注于代码实现本身。
      </>
    ),
  },
  {
    title: "强开放能力",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        提供全面的二次开发能力，并进行了良好的能力模型抽象，开发者可以使用这些能力达成自己的业务目标。
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
