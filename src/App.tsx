import { Col, Form, Input, Row, Typography } from "antd";
import { PdfViewer } from "./PdfViewer";
import "./App.less";

const { Title } = Typography;

function App() {
  return (
    <Row className="app">
      <Col span={12} style={{ padding: "16px" }}>
        <Form layout="vertical">
          <Title level={3}>Personal details</Title>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Wanted Job Title" name="job-title">
                <Input size="large" placeholder="e. g. Teacher" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="First Name" name="first-name">
                <Input size="large" placeholder="John" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name" name="last-name">
                <Input size="large" placeholder="Doe" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email" name="email">
                <Input size="large" placeholder="example@mail.com" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone Number" name="phone-number">
                <Input size="large" placeholder="+370 xx xxx xx xx" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col span={12}>
        <PdfViewer></PdfViewer>
      </Col>
    </Row>
  );
}

export default App;
