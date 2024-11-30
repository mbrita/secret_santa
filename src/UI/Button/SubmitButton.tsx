import { Button } from 'antd';

interface ISubmitButton {
  title: string;
  color: string;
}

export const SubmitButton = ({ title, color }: ISubmitButton) => {
  return (
    <Button
      type="primary"
      style={{
        backgroundColor: color,
        padding: '20px 40px ',
        borderRadius: '10px',
        fontSize: '18px',
        marginRight: '10px',
        minWidth: '200px',
      }}
    >
      {title}
    </Button>
  );
};
