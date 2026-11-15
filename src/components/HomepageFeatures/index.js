import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '✍️ Easy Markdown Authoring',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn Markdown syntax and create well-formatted documentation using headings, lists, tables, links, images, and code blocks.

      </>
    ),
  },
  {
    title: '📚 Organized Help Center',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <> 
      Explore Markdown guides, syntax references, cheat sheets, and practical examples through structured documentation.

       </>
    ),
  },
  {
    title: '💻 MDX and Components',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Discover how MDX and reusable components extend Markdown to create interactive and engaging documentation.

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
        <Heading as="h3">{title}</Heading>
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
