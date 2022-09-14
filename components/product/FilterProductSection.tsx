import React, { FC } from "react";
import {
  Container,
  Collapse,
  Row,
  Checkbox,
  Text,
  Button,
} from "@nextui-org/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterProductSection = () => {
  const [selected, setSelected] = React.useState(true);
  return (
    <Container>
      <Collapse.Group bordered accordion={false}>
        <Collapse title="ตัวกรองสินค้า">
          <Row>
            <Checkbox
              isSelected={selected}
              color="primary"
              onChange={setSelected}
            >
              มาใหม่
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              isSelected={selected}
              color="primary"
              onChange={setSelected}
            >
              ขายดี
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              isSelected={selected}
              color="primary"
              onChange={setSelected}
            >
              แนะนำ
            </Checkbox>
          </Row>
        </Collapse>
        <Collapse title="ตัวกรองราคา">
          <Container css={{ mb: "40px" }}>
            <Row>
              <Text>เลือกช่วงราคา :</Text>
            </Row>
            <Row css={{ p: "$5" }}>
              <Slider
                range
                min={500}
                max={2000}
                step={500}
                onChange={(e) => {
                  console.log("e", e);
                }}
                defaultValue={[1000, 2000]}
                dots
                marks={{
                  500: <Text size={"$sm"}>500</Text>,
                  1000: <Text size={"$sm"}>1,000</Text>,
                  1500: <Text size={"$sm"}>1,500</Text>,
                  2000: <Text size={"$sm"}>2,000</Text>,
                }}
                trackStyle={[{ backgroundColor: "#8E05C2" }]}
                activeDotStyle={{ backgroundColor: "#8E05C2" }}
                pushable={true}
              />
            </Row>
          </Container>
        </Collapse>
      </Collapse.Group>
      <Row css={{ mt: "$10" }}>
        <Button css={{ width: "100%" }}>กรองสินค้า</Button>
      </Row>
      <Row css={{ mt: "$5" }}>
        <Button
          css={{ width: "100%", background: "$white", color: "$primary" }}
          bordered
        >
          ล้างค่า
        </Button>
      </Row>
    </Container>
  );
};

export default FilterProductSection;
