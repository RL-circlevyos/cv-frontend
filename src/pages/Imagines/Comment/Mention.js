import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";
import "antd/dist/antd.css";
import { Mentions, Form } from "antd";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { commentCreateAction } from "../../../store/apps/imagines/imagine-action";
import { Button, IconButton } from "@mui/material";
const { Option } = Mentions;

const Mention = ({ users }) => {
  const dispatch = useDispatch();
  const imagineId = useParams();
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    const values = await form.validateFields();
    const commentBody = {
      textcomment: values.comment,
    };
    dispatch(commentCreateAction(commentBody, imagineId.id));
    onReset();
  };
  return (
    <>
      <Form form={form} layout="horizontal" onFinish={onFinish}>
        <Form.Item
          name="comment"
          wrapperCol={{
            span: 20,
            offset: 2,
          }}
          labelCol={{
            span: 6,
          }}
        >
          <div className="flex gap-x-2 items-start">
            {" "}
            <Mentions
              style={{ width: "100%", borderRadius: "12px", paddingTop: "2px" }}
              rows={2}
              placeholder="@mention and comment"
            >
              {users?.map((user) => {
                return (
                  <Option key={user._id} value={user.name}>
                    {user.name}
                  </Option>
                );
              })}
            </Mentions>
            <IconButton variant="text" color="primary" type="submit">
              <PaperAirplaneIcon className="h-6 w-6 transform rotate-45" />
            </IconButton>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default React.memo(Mention);
