import { Card, Form } from 'antd';
import { TimePicker, Typography } from 'antd';

const index = () => {
  const { Title } = Typography;
  const format = 'HH:mm';
  return (
    <Card style={{marginTop:20, marginBottom:50}}>
      <Title level={5} className="card-title">
        Thời gian dự kiến đến
      </Title>
      <Form.Item
        label={'Chọn giờ'}
        name="timeSchedule"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn giờ',
          },
        ]}>
        <TimePicker style={{ width: '100%' }} format={format} />
      </Form.Item>
    </Card>
  );
};

export default index;
