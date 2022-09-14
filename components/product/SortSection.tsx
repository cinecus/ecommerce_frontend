import React from "react";
import { Grid, Text, Dropdown } from "@nextui-org/react";

const SortSection = () => {
  const [selectedDropdown, setSelectedDropdown] = React.useState(
    new Set(["A-Z"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedDropdown).join("").replace("_", " "),
    [selectedDropdown]
  );
  return (
    <Grid.Container gap={2} justify="space-between">
      <Grid xs={12} sm={6}>
        <Text h6 size={15} color="white" css={{ m: 0 }}>
          พบสินค้า 6 รายการจากทั้งหมด 24 รายการ
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
            selectedKeys={selectedDropdown}
            onSelectionChange={setSelectedDropdown as any}
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
