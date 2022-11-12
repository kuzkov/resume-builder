import { FileOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./resume-form.less";

export type ResumeFormProps = {};

export const ResumeForm = (props: ResumeFormProps) => {
  return (
    <div className="resume-form">
      <div className="resume-form__fab-wrapper">
        <Link to="/app/preview">
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ display: "inline-block" }}
          >
            Preview
            <FileOutlined />
          </Button>
        </Link>
      </div>
    </div>
  );
};
