import { useState } from 'react';
import { Dropdown, Layout, Typography } from 'antd';
import styles from './HomePageHeaderStyles.module.scss';
import { recipients, rules } from './HomePageConstants';
import { SubmitButton } from '../../../UI/Button/SubmitButton';
import Logo from '../../../assets/main page/logo.svg';
import SideMenuIcon from '../../../assets/main page/menu.svg';
import SideMenu from './SideMenu/SideMenu';

const { Header } = Layout;
const { Title } = Typography;

export const HomePageHeader = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Header className={styles.header}>
      <div className={styles['title-container']}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <Title className={styles.title}>Secret Santa</Title>
      </div>

      <div className={styles['menu-container']}>
        <Dropdown menu={{ items: rules }}>
          <span className={styles.button}>Rules</span>
        </Dropdown>
        <Dropdown menu={{ items: recipients }}>
          <span className={styles.button}>What to give</span>
        </Dropdown>
        <SubmitButton title="Login" color="rgba(255, 255, 255, .1)" />
        <SubmitButton title="Create a game" color="#f74f4f" />
      </div>

      <div className={styles.sidemenu}>
        <img
          src={SideMenuIcon}
          alt="Side Menu"
          className={styles.sidemenuImg}
          onClick={toggleDrawer}
        />
      </div>
      <SideMenu open={open} onClose={toggleDrawer} />
    </Header>
  );
};
