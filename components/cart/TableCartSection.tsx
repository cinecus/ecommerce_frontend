import React from "react";
import {
  Container,
  Grid,
  Table,
  Text,
  Row,
  Button,
  Popover,
  Modal,
  Image,
} from "@nextui-org/react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import {
  useAddToCart,
  useDecreaseCart,
  useGetCart,
  useDeleteCartItem,
} from "../../hooks/CartHook";
import { useAppSelector } from "../../store/store";
import { cartItemType } from "../../types";
import { numberFormat } from "../../function";

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
  const { data, isLoading, isError } = useGetCart();
  const { mutate: mutateAddtoCart } = useAddToCart();
  const { mutate: mutateDecreaseCart } = useDecreaseCart();
  const { mutate: mutateDeleteCartItem } = useDeleteCartItem();
  const { carts } = useAppSelector((state) => state.cart);
  const [visible, setVisible] = React.useState(false);
  const [deletedCartID,setDeletedCartID] = React.useState<string | null>(null);
  const handler = (cartID:string) => {
    setVisible(true)
    setDeletedCartID(cartID)
  }
  const closeHandler = () => {
    setVisible(false);
  };
  const renderCell = (record: cartItemType, columnKey: ColumnKeyType) => {
    switch (columnKey) {
      case "id":
        return (
          <Row justify="center">
            <Text>{record.key}</Text>
          </Row>
        );
      case "name":
        return (
          <Grid.Container gap={2} justify="center">
            <Grid>
              <Image
                src={record.product?.image as string}
                objectFit="cover"
                width={120}
                height={100}
                alt={"ชื่อสินค้า"}
              />
              <Row justify="center">
                <Text>{record.product?.name}</Text>
              </Row>
            </Grid>
          </Grid.Container>
        );
      case "price":
        return (
          <Row justify="center">
            <Text>{numberFormat(record.product?.price as number)}</Text>
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
            <Button
              size={"xs"}
              light
              icon={<FaMinus size={16} />}
              onPress={() => {
                if (record.qty !== 1) {
                  mutateDecreaseCart({ productID: record.product?._id! });
                }
              }}
            />

            <Text>{record.qty}</Text>

            <Button
              size={"xs"}
              light
              icon={<FaPlus size={16} />}
              onPress={() =>
                mutateAddtoCart({ productID: record.product?._id! })
              }
            />
          </Row>
        );
      case "subtotal":
        return (
          <Row justify="center">
            <Text>{numberFormat(record.product?.price! * record.qty)}</Text>
          </Row>
        );
      case "action":
        // const [isOpen,setIsOpen] = React.useState(false)
        return (
          <div>
              <Button size={"xs"} auto ghost icon={<FaTrashAlt />} onPress={()=>handler(record._id)}/>
             
          </div>
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
        <Table.Body items={carts}>
          {(item: cartItemType) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>
                  {renderCell(item, columnKey as ColumnKeyType)}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
        {/* <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        /> */}
      </Table>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}

      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            ต้องการลบสินค้ารายการนี้หรือไม่ ?
          </Text>
        </Modal.Header>
        <Modal.Footer>
          <Button auto flat  onPress={closeHandler}>
            ยกเลิก
          </Button>
          <Button auto onPress={()=>{
            closeHandler()
            mutateDeleteCartItem({cartID:deletedCartID as string})
          }} color="error">
            ลบ
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TableCart;
