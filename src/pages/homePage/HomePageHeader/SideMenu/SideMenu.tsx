import { Drawer, Menu } from 'antd';
import CloseIcon from '../../../../assets/main page/close.svg';
import styles from './SideMenuStyles.module.scss';
import { SubmitButton } from '../../../../UI/Button/SubmitButton';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

type MenuItem = {
  key: string;
  label: string;

  children?: MenuItem[];
};

const items: MenuItem[] = [
  {
    key: '1',
    label: 'Rules',
    children: [
      {
        key: '1',
        label: 'Helpful for the Player',
      },
      {
        key: '2',
        label: 'Instructions for Secret Santas',
      },
      {
        key: '3',
        label: 'What You Need to Know',
      },
      {
        key: '4',
        label: 'How to Fill Out the Questionnaire',
      },
      {
        key: '5',
        label: 'How to Wrap a Gift',
      },
      {
        key: '6',
        label: 'Game Rules',
      },
      {
        key: '7',
        label: 'FAQ (Questions and Answers)',
      },
    ],
  },
  {
    key: '2',
    label: 'What to give',
    children: [
      {
        key: '1',
        label: 'To colleagues',
      },
      {
        key: '2',
        label: 'To classmates',
      },
      {
        key: '3',
        label: 'To friends',
      },
      {
        key: '4',
        label: 'To a man',
      },
      {
        key: '5',
        label: 'To a woman',
      },
      {
        key: '6',
        label: 'To a boy',
      },
      {
        key: '7',
        label: 'To a girl',
      },
    ],
  },
];

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose }) => {
  return (
    <Drawer placement="left" closable={false} onClose={onClose} open={open} width="100%">
      <div className={styles['close-button-container']}>
        <img src={CloseIcon} alt="" className={styles['close-button']} onClick={onClose} />
      </div>

      <div className={styles['menu-container']}>
        <Menu
          className={styles.customMenu}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
        <div style={{ marginBottom: '5px' }}>
          <SubmitButton title="Login" color="#27ae60" />
        </div>
        <div>
          <SubmitButton title="Create a game" color="#f74f4f" />
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
