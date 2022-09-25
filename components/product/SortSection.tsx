import React from "react";
import { Grid, Text, Dropdown } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { handleSortProduct } from "../../store/slices/productSlice";

const SortSection = () => {
  const {productShow,productList,sortProduct} = useAppSelector(state=>state.product)
  const dispatch = useAppDispatch()
  // const [selectedDropdown, setSelectedDropdown] = React.useState(
  //   sortProduct
  // );

  const selectedValue = React.useMemo(
    () => Array.from(sortProduct).join("").replace("_", " "),
    [sortProduct]
  );
  return (
    <Grid.Container gap={2} justify="space-between">
      <Grid xs={12} sm={6}>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          พบสินค้า {productShow.length} รายการจากทั้งหมด {productList.length} รายการ
        </Text>
      </Grid>
      <Grid xs={12} sm={3}>
        <Dropdown>
          <Dropdown.Button
            flat
            color="secondary"
            css={{ tt: "capitalize", width: "100%" }}
          >
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            color="secondary"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={sortProduct}
            onSelectionChange={(e:any)=>dispatch(handleSortProduct(e.currentKey))}
          >
            <Dropdown.Item key="A-Z">A-Z</Dropdown.Item>
            <Dropdown.Item key="Z-A">Z-A</Dropdown.Item>
            <Dropdown.Item key="Newest">Newest</Dropdown.Item>
            <Dropdown.Item key="Oldest">Oldest</Dropdown.Item>
            <Dropdown.Item key="Low_Price">Low Price</Dropdown.Item>
            <Dropdown.Item key="High_Price">High Price</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
};

export default SortSection;
