import React from "react";
import { Container, Card, Text, Row, Col, Button } from "@nextui-org/react";

const SummarySection = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Text b>สรุปรายการคำสั่งซื้อ</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Row justify="space-between">
            <Col span={4}>
              <Text size={16}>จำนวน</Text>
            </Col>
            <Col span={5}>
              <Text size={16}>รายการ</Text>
            </Col>
            <Col span={3}>
              <Text size={16}>ราคารวม</Text>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={4}>
              <Text size={16} css={{ color: "$accents8" }}>
                2
              </Text>
            </Col>
            <Col span={5}>
              <Text size={16} css={{ color: "$accents8" }}>
                Tony Reichert
              </Text>
            </Col>
            <Col span={3}>
              <Text size={16} css={{ color: "$accents8" }}>
                20.00
              </Text>
            </Col>
          </Row>
          <Card.Divider />
          <Row css={{ py: "$5", gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ยอดทั้งหมด :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              00.00 บาท
            </Text>
          </Row>
          <Row css={{ gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ส่วนลด :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              00.00 บาท
            </Text>
          </Row>
          <Card.Divider />
          <Row css={{ py: "$5", gap: "$3", alignItems: "center" }}>
            <Text size={16} b>
              ยอดที่ต้องชำระ :
            </Text>
            <Text size={16} css={{ color: "$accents8" }}>
              00.00 บาท
            </Text>
          </Row>
          <Card.Divider />
        </Card.Body>
      </Card>
      <Button css={{ w: "100%", mt: "$4" }}>ยืนยันคำสั่งซื้อ</Button>
    </Container>
  );
};

export default SummarySection;
