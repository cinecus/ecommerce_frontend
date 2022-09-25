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
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  filterProduct,
  handleChangeFilterPrice,
  handleChangeFilterProduct,
  resetFilter,
} from "../../store/slices/productSlice";

const FilterProductSection = () => {
  const [selected, setSelected] = React.useState(true);
  const dispatch = useAppDispatch();
  const { filteredProduct, filteredPrice } = useAppSelector(
    (state) => state.product
  );
  return (
    <Container>
      <Collapse.Group bordered accordion={false}>
        <Collapse title="ตัวกรองสินค้า">
          <Row>
          </Row>
          <Row>
            <Checkbox
              isSelected={filteredProduct.new}
              color="primary"
              onChange={(e) =>
                dispatch(handleChangeFilterProduct({ type: "new", value: e }))
              }
            >
              มาใหม่
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              isSelected={filteredProduct.bestseller}
              color="primary"
              onChange={(e) =>
                dispatch(
                  handleChangeFilterProduct({ type: "bestseller", value: e })
                )
              }
            >
              ขายดี
            </Checkbox>
          </Row>
          <Row>
            <Checkbox
              isSelected={filteredProduct.suggest}
              color="primary"
              onChange={(e) =>
                dispatch(
                  handleChangeFilterProduct({ type: "suggest", value: e })
                )
              }
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
                  dispatch(handleChangeFilterPrice(e));
                }}
                value={[filteredPrice.min, filteredPrice.max]}
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
        <Button css={{ width: "100%" }} onPress={()=>dispatch(filterProduct(null))}>กรองสินค้า</Button>
      </Row>
      <Row css={{ mt: "$5" }}>
        <Button
          css={{ width: "100%", background: "$white", color: "$primary" }}
          bordered
          onPress={()=>dispatch(resetFilter(null))}
        >
          ล้างค่า
        </Button>
      </Row>
    </Container>
  );
};

export default FilterProductSection;
