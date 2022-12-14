import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Đưa sản phẩm học máy lên thực tế không dễ',
    Svg: require('@site/static/img/mle.svg').default,
    description: (
      <>
        {/* <p>Chia sẻ tất cả nghiên cứu về việc mở rộng (scale) mô hình học máy trên sản phẩm thực tế (production).</p> */}
        <p>Những kinh nghiệm này được đúc rút khi <a href='https://scale-ml.github.io/blog/Authors'>ProtonX Team</a> xây dựng sản phẩm <a href='https://bluestudio.ai/'>Soạn thảo thông minh</a></p>
        <p>Và một điều thú vị đó là chúng tôi đang dùng <b>chính bộ gõ này</b> để soạn thảo blog này.</p>
      </>
    ),
  },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
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

export default function HomepageFeatures() {
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
