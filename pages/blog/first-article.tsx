/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import Example from './example.mdx';
import styles from './markdown.module.scss'; // 更新这个路径，如果你把它放在其他地方。

const Article: React.FC = () => {
  return (
    <PageLayout blogwithsidebar>
      <div className={styles.markdown}>
        <Example />
      </div>
    </PageLayout>
  );
};

export default Article;
