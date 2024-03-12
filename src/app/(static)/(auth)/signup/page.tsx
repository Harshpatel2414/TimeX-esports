"use client"
import { useAuth } from '@/context/AuthContext'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Upload } from 'antd'
import { UploadChangeParam } from 'antd/es/upload'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { FieldTypes } from '../../../../../new-types'

const Signup = () => {
  const { signUpWithEmail } = useAuth()
  const [imageSelected, setImageSelected] = useState(false);

  const handleChange = (info: UploadChangeParam) => {
    const fileList = info.fileList.slice(-1);

    if (fileList.length > 0) {
      setImageSelected(true);
    } else {
      setImageSelected(false);
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleSubmit = (values: FieldTypes) => {
    signUpWithEmail(values);
  };

  return (
    <div className="flex px-5 gap-0 flex-col lg:flex-row-reverse items-center lg:justify-around w-full py-20">
      <div className=" lg:w-1/3 drop-shadow-xl z-10">
        <h1 className="text-3xl lg:text-4xl drop-shadow-xl shadow-container font-bold tracking-wider">Lets get started</h1>
        <p className="texte-sm text-zinc-700">Sign up to get more information about tournaments</p>
        <Image width={384} height={384} quality={100} className="-mb-14 md:my-0 w-96 relative drop-shadow-xl shadow-black" src="/images/login.png" alt="" />
      </div>
      <div className='flex flex-col'>
        <div className="flex flex-col gap-4  p-5 bg-zinc-900 rounded-lg items-center">
          <span className=" font-bold text-xl mb-2">Register</span>

          {/* form section */}

          <Form className='w-full md:w-[350px]' onFinish={values => handleSubmit(values)}>
            <Form.Item<FieldTypes>
              className='flex justify-center'
              name={"profilePicture"}
              valuePropName='fileList'
              getValueFromEvent={normFile} >
              <Upload
                listType='picture-circle'
                onChange={handleChange} maxCount={1}
              >
                {!imageSelected &&
                  <span className='text-white'>
                    <PlusOutlined className='mx-1' />Upload
                  </span>
                }
              </Upload>
            </Form.Item>

            <Form.Item<FieldTypes>
              name={"username"}
              rules={[{
                required: true, message: "Please enter your username!"
              }]}>
              <Input className='p-2 w-full outline-none text-zinc-800' placeholder="Username" />
            </Form.Item>
            <Form.Item<FieldTypes>
              name={"email"}
              rules={[{
                required: true,
                type: 'email', message: 'Please enter a valid email!'
              }]}>
              <Input className='p-2 w-full outline-none text-zinc-800' placeholder="example@xyz.com" />
            </Form.Item>

            <Form.Item<FieldTypes>
              name={"password"}
              rules={[{
                required: true, message: "Please input your password!"
              }]}>
              <Input.Password className='p-2 w-full outline-none text-zinc-800' placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The new password that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password className='p-2 w-full outline-none text-zinc-800' placeholder='Confirm Password' />
            </Form.Item>

            <Form.Item<FieldTypes>
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                }
              ]}
            >
              <Checkbox>
                <span className='text-white'>
                  I have read the <a className='text-blue-500' href="#">agreement*</a>
                </span>
              </Checkbox>
            </Form.Item>

            <Form.Item className='flex justify-center'>
              <Button className='mx-auto btn-primary h-fit border-none' htmlType='submit'>Sign Up</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="text-center flex flex-col items-center gap-2 mt-4">
          <span>or</span>
          <button className="btn-primary flex items-center gap-2 w-80 justify-center"><FaGoogle />Sign up with google</button>
          <p >You already have account? <Link className='text-container underline' href='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup