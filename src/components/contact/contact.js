import React from "react";
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import './contact.css';


const Contact = () =>{

    //api wrk
    const onfinishHandler = async(values)=>{

        // console.log(values)
        try {
            const res = await axios.post('https://api-9e1z.onrender.com/api/user/register', values);
            if(res.data.success){
                message.success('Message sent for sandeep !')
            }else{
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            message.error('somthing went wrong')
        }
    };

    //api wrk
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      /* eslint-disable no-template-curly-in-string */
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
       
      };
      /* eslint-enable no-template-curly-in-string */
      
    
    return(
      <div className="box" id='contact'>
        <div className="head">You Have any query then have your say</div>
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onfinishHandler}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
        >
            <Form.Item name= 'name'label="Name" rules={[{ required: true }]}>
            <Input />
            </Form.Item>
            <Form.Item name='email' label="Email" rules={[{ type: 'email' }]}>
            <Input />
            </Form.Item>
            <Form.Item name= 'mobile' label="Mobile" rules={[{  required: true}]}>
            <Input />
            </Form.Item>            
            <Form.Item name='message' label="Message">
            <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    </div>
    )
}
export default Contact;