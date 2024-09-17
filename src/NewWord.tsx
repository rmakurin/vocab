import { Button, Form, Input } from "antd";


function NewWord() {
  return <>
    Add new word!
    <Form
      requiredMark={false}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ width: 600 }}
    >
      <Form.Item
        label="German word"
        name="word"
        rules={[{ required: true, message: 'Please input German word!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="English Translation"
        name="eng"
        rules={[{ required: true, message: 'Please input English Translation!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Russian Translation"
        name="rus"
        rules={[{ required: true, message: 'Please input Russian Translation!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  </>
}

export default NewWord;