import React from "react";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { IItem } from "./Tabs/ItemList";

interface IItemDetailProps {
  onUnSelectItem: () => void;
  item: IItem;
}
const { Title, Text } = Typography;

const ItemDetail: React.FC<IItemDetailProps> = ({ onUnSelectItem, item }) => {
  return (
    <div className="flex flex-col p-5">
      <Button
        type="dashed"
        icon={<CaretLeftOutlined />}
        onClick={onUnSelectItem}
      ></Button>

      <Title className="mt-6">Item detail {item.id}</Title>
      <img src={item?.img} />
      <Text>Name {item.name}</Text>
    </div>
  );
};

export default ItemDetail;
