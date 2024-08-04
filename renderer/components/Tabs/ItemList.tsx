"use client";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
const { Meta } = Card;

export interface IItem {
  name: string;
  id: string;
  img: string;
}

interface IItemListProps {
  onSelectItem: (item: IItem) => void;
}

const ItemList: React.FC<IItemListProps> = ({ onSelectItem }) => {
  const [itemList, setItemList] = useState<IItem[]>([
    { name: "cat-1", id: "cat1", img: "/images/cat.jpeg" },
    { name: "cat-2", id: "cat2", img: "/images/cat2.jpeg" },
    { name: "cat-3", id: "cat3", img: "/images/cat3.jpeg" },
    { name: "cat-4", id: "cat4", img: "/images/cat4.jpeg" },
    { name: "cat-5", id: "cat5", img: "/images/cat5.jpeg" },
    { name: "cat-6", id: "cat6", img: "/images/cat6.jpeg" },
  ]);

  return (
    <div className="flex gap-6 flex-wrap justify-around py-3">
      {itemList.map((item) => (
        <Card
          hoverable
          style={{ width: 240, height: 240 }}
          cover={
            <img alt="example" src={item.img} className="w-[240px] h-[134px]" />
          }
          onClick={() => onSelectItem(item)}
        >
          <Meta
            title={`Items - ${item.id}`}
            description="This is the description"
          />
        </Card>
      ))}
    </div>
  );
};

export default ItemList;
