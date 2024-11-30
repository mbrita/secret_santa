import { Layout } from 'antd';
import styles from './HomePageStyles.module.scss';
import Santa from '../../assets/main page/santa.png';
import { Content } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import { SubmitButton } from '../../UI/Button/SubmitButton';
import { HomePageHeader } from './HomePageHeader/HomePageHeader';

export const HomePage = () => {
  return (
    <Layout className={styles.layout}>
      <HomePageHeader />
      <Content className={styles.content}>
        <div className={styles['text-container']}>
          <Title className={styles.title} style={{ color: '#fff' }}>
            You can play in the office or at home, with family and friends. Organize the game when
            everyone is nearby or when your loved ones are far away.
          </Title>
          <SubmitButton title="Try it" color="#f74f4f" />
        </div>
        <img src={Santa} alt="Santa" className={styles['santa-image']} />
      </Content>
    </Layout>
  );
};
