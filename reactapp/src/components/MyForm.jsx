import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import DataService from '../service/DataTableService';

const MyForm = () => {
  const [form] = Form.useForm();
  const [expandForm, setExpandForm] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    const rest = DataService.insertHome(values);
    console.log(rest);
  };

  const toggleForm = () => {
    setExpandForm(!expandForm);
  };

  return (
    <Form form={form} onFinish={onFinish}>
        <Form.Item name="adress" label="Адрес">
            <Input />
          </Form.Item>
      <Form.Item>
        <Button type="link" onClick={toggleForm}>
          {expandForm ? 'Скрыть' : 'Добавить счетчик'}
        </Button>
      </Form.Item>
      
      {expandForm && (
        <>
          <Form.Item name={['waterMeter', 'serialNumber']} label="Серийный номер счетчика">
            <Input />
          </Form.Item>
          <Form.Item name={['waterMeter', 'reading']} label="Показания счетчика">
            <Input />
          </Form.Item>
        </>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;