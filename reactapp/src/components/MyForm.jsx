import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import DataService from '../service/DataTableService';

const MyForm = () => {
  const [form] = Form.useForm();
  const [expandForm, setExpandForm] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    // const rest = DataService.insertHome(values);
  };

  const toggleForm = () => {
    setExpandForm(!expandForm);
  };
  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue="ул">
      <Option value="ул">улица</Option>
      <Option value="пр">проспект</Option>
      <Option value="бул">бульвар</Option>
      <Option value="пер">переулок</Option>
      <Option value="тупик">тупик</Option>
    </Select>
  );
  return (
    <div>
      <Form form={form} onFinish={onFinish}>

        <Form.Item name="streat" label="Улица">
          <Input placeholder='Ленина' addonBefore={selectBefore} />
        </Form.Item>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <Form.Item name="house" label="Дом">
          <Input placeholder='35'/>
        </Form.Item>
        <Form.Item name="flour" label="Этаж">
          <Input placeholder='2'/>
        </Form.Item>
        <Form.Item name="appartament" label="Квартира">
          <Input placeholder='15' />
        </Form.Item>
        </div>
        
        {/* <Form.Item>
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

        )} */}
        <div id="okBttn" style={{display: 'flex', justifyContent: "flex-end"}}>
          <Form.Item style={{margin: 0}}>
            <Button type="primary">
              Отправить
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div >
  );
};

export default MyForm;