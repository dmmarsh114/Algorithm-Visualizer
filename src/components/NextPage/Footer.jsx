import React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    types: {
        email: 'Email is not validate email!',
    }
};

export default function Footer() {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <div id="footer" className="footer">
            <Row justify="space-between" align="middle">
                <Col span={12}>
                    <Form {...layout} className="contact-form" onFinish={onFinish} validateMessages={validateMessages}>
                        <h1 className="contact-title" style={{ color: 'white' }}>Contact</h1>
                        <Form.Item name={['user', 'name']} label="Name" >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Comment">
                            <Input.TextArea placeholder="Comment" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button style={{ backgroundColor: 'black', color: 'white' }} className="form-button" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={12}>
                    <p className="footer-copy-r">&copy;2020 Taylor Dickens, Tristan Oshier, Daniel Marsh</p>
                </Col>
            </Row>
        </div>
    )
}
