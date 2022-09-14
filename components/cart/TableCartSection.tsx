import React from "react";
import {
  Container,
  Grid,
  Table,
  Text,
  Row,
  Button,
  Popover,
  Image,
} from "@nextui-org/react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";

type CartItemType = {
  id: string;
  name: string;
  img: string;
  price: number | string;
  qty: number | string;
  subtotal: number | string;
};

type ColumnKeyType = "id" | "name" | "price" | "qty" | "subtotal" | "action";

const TableCart = () => {
  const columns = [
    {
      key: "id",
      label: "#",
    },
    {
      key: "name",
      label: "สินค้า",
    },
    {
      key: "price",
      label: "ราคา",
    },
    {
      key: "qty",
      label: "จำนวน",
    },
    {
      key: "subtotal",
      label: "ราคารวม",
    },
    {
      key: "action",
      label: "",
    },
  ];
  const rows = [
    {
      key: "1",
      id: "1",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "5",
      subtotal: "200",
    },
    {
      key: "2",
      id: "2",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "5",
      subtotal: "200",
    },
    {
      key: "3",
      id: "3",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "50",
      subtotal: "200",
    },
    {
      key: "4",
      id: "4",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "5",
      subtotal: "200",
    },
    {
      key: "5",
      id: "5",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "5",
      subtotal: "200",
    },
    {
      key: "6",
      id: "6",
      name: "Tony Reichert",
      img: "https://res.cloudinary.com/cinecus/image/upload/v1647622428/redux-cart/theregisti-HSXIp58yPyI-unsplash_qqcd87.jpg",
      price: "40",
      qty: "5",
      subtotal: "200",
    },
  ];
  const renderCell = (record: CartItemType, columnKey: ColumnKeyType) => {
    switch (columnKey) {
      case "id":
        return (
          <Row justify="center">
            <Text>{record.id}</Text>
          </Row>
        );
      case "name":
        return (
          <Grid.Container gap={2} justify="center">
            <Grid>
              <Image
                src={record.img}
                objectFit="cover"
                width={120}
                height={100}
                alt={"ชื่อสินค้า"}
              />
              <Row justify="center">
                <Text>{record.name}</Text>
              </Row>
            </Grid>
          </Grid.Container>
        );
      case "price":
        return (
          <Row justify="center">
            <Text>{record.price}.00</Text>
          </Row>
        );
      case "qty":
        return (
          <Row
            justify="space-between"
            css={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button size={"xs"} light icon={<FaMinus size={16} />} />

            <Text>{record.qty}</Text>

            <Button size={"xs"} light icon={<FaPlus size={16} />} />
          </Row>
        );
      case "subtotal":
        return (
          <Row justify="center">
            <Text>{record.subtotal}.00</Text>
          </Row>
        );
      case "action":
        return (
          <Popover placement={"top-right"}>
            <Popover.Trigger>
              <Button size={"xs"} auto ghost icon={<FaTrashAlt />} />
            </Popover.Trigger>
            <Popover.Content>
              <Grid.Container
                css={{
                  borderRadius: "14px",
                  padding: "$10",
                  maxWidth: "280px",
                  gap: "$10",
                }}
              >
                <Row justify="center" align="center">
                  <Text b>ลบสินค้าออกจากตะกร้าหรือไม่ ?</Text>
                </Row>
                <Grid.Container justify="flex-end" alignContent="center">
                  <Grid>
                    <Button size="sm" light auto>
                      ยกเลิก
                    </Button>
                  </Grid>
                  <Grid>
                    <Button size="sm" shadow color="error" auto>
                      ลบ
                    </Button>
                  </Grid>
                </Grid.Container>
              </Grid.Container>
            </Popover.Content>
          </Popover>
        );
      default:
        return <Text>{record[columnKey]}</Text>;
        break;
    }
  };
  return (
    <Container fluid>
      <Table
        css={{
          height: "auto",
          zIndex: 0,
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.key}
              css={{ color: "$accents9", fs: "$md" }}
              align="center"
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(item) => (
            <Table.Row key={item.key}>
              {(columnKey) => (
                <Table.Cell key={item.key}>
                  {renderCell(item, columnKey as ColumnKeyType)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
    </Container>
  );
};

export default TableCart;
