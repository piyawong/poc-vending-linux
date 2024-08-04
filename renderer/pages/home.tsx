"use client";
import React, { useState } from "react";
import Head from "next/head";

// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
import { Tabs } from "antd";
import ItemList, { IItem } from "../components/Tabs/ItemList";
import Help from "../components/Tabs/Help";
import ItemDetail from "../components/ItemDetail";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<IItem | null>(null);
  const handleSelectItem = (item: IItem | null) => {
    setSelectedItem(item);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>
      <div className=" flex flex-col text-2xl w-full flex-1 bg-white">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=av4sEcTS8QA"
          playing
          width="100%"
          style={{ flexShrink: 0 }}
          muted
        />

        <div className=" flex-1 overflow-x-hidden overflow-y-scroll">
          {selectedItem ? (
            <ItemDetail
              item={selectedItem}
              onUnSelectItem={() => handleSelectItem(null)}
            />
          ) : (
            <ItemList onSelectItem={handleSelectItem} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
