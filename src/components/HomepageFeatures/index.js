import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Google Summer of Code',
    Svg: require('@site/static/img/gsoc-summer.svg').default,
    description: (
      <>
          Google Summer of Code is a global,
          online program focused on bringing new contributors into open source software development.
          GSoC Contributors work with an open source organization on a 12+ week programming project under the guidance of mentors.
      </>
    ),
  },
  {
    title: 'Open Source Promotion Plan',
    Svg: require('@site/static/img/ospp_en.svg').default,
    description: (
      <>
          Open Source Promotion Plan is a summer program organized and
          long-term supported by Open Source Software Supply Chain Promotion Plan.
          It aims to encourage college students to actively participate in the development
          and maintenance of open source software and promote the vigorous development
          of excellent open source software community.
      </>
    ),
  },
  {
    title: 'Linux Foundation Training',
    Svg: require('@site/static/img/lf_logo.svg').default,
    description: (
      <>
          The Linux Foundation hosts The Linux Foundation Training (LiFT) Scholarship
          Program to provide opportunities to up-and-coming developers and sysadmins
          who show promise for helping shape the future of Linux and open source software
          but do not otherwise have the ability to attend training courses or take certification exams.
          Since 2010, we have awarded over 1,100 scholarships worth millions of dollars in training and certification.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
