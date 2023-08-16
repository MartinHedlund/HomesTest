import React, { useState } from 'react';
import { Form, Input, Button, Select, Space } from 'antd';
import { DeleteTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import DataService from '../service/DataTableService';

const MyForm = () => {
  const [form] = Form.useForm();
  const [expandForm, setExpandForm] = useState(false);

  const onFinish = (values) => {
    // доделать строчку что то там с '' и null проверку
    var address = `${values["prefix"]} ${values["streat"]} д.${values["house"]} ${values["flour"] !== '' ? `э.${values["flour"]}`: ''} ${values["appartament"] ??= `кв.${values["appartament"]}`}`
    console.log(values);
    console.log(address);
    
    // const rest = DataService.insertHome(values);
  };

  const toggleForm = () => {
    setExpandForm(!expandForm);
  };
  const { Option } = Select;
  const selectBefore = (
    <Form.Item name="prefix" noStyle initialValue={"улица"}>
      <Select defaultValue="улица">
        <Option value="улица">улица</Option>
        <Option value="проспект">проспект</Option>
        <Option value="бульвар">бульвар</Option>
        <Option value="переулок">переулок</Option>
        <Option value="тупик">тупик</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <Form form={form} onFinish={onFinish}>

        <Form.Item
          required
          name="streat"
          label="Улица"
          rules={[
            {
              required: true,
              message: "Поле \"Улица\" обязательно"
            },
          ]}>
          <Input placeholder='Ленина' addonBefore={selectBefore} />
        </Form.Item>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Space>
            <Form.Item
              required
              name="house"
              label="Дом"
              rules={[
                {
                  required: true,
                  message: "Поле \"Дом\" обязательно"
                },
              ]}>
              <Input placeholder='35' />
            </Form.Item>
            <Form.Item name="flour" label="Этаж">
              <Input placeholder='2'/>
            </Form.Item>
            <Form.Item name="appartament" label="Квартира">
              <Input placeholder='15' />
            </Form.Item>
          </Space>
        </div>

        <Form.Item>

          <Button icon={expandForm ? <DeleteTwoTone /> : <PlusCircleTwoTone />} type="link" onClick={toggleForm}>
            {expandForm ? 'Удалить счетчик' : 'Добавить счетчик'}
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

        <div id="okBttn" style={{ display: 'flex', justifyContent: "flex-end" }}>
          <Form.Item style={{ margin: 0 }}>
            <Button type="primary" htmlType="submit" onSubmit={() => { DataService.insertHome(form.getFieldsValue()) }}>
              Отправить
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div >
  );
};

export default MyForm;