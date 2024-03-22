import React, { useState } from 'react'
import {data} from '../data'
import {Table, Typography, Image} from "antd"

export default function _Table({rows = 10}) {

    const dataSource=data.map(item => ({...item, key: item.id}))
    const columns = [
        {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <Typography.Text copyable>{text}</Typography.Text>
        },
        {
          title: 'Number',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id
        },
        {
          title: 'Album Id',
          dataIndex: 'albumId',
          key: 'albumId',

        },
        {
          title: "Image",
          dataIndex: "url",
          key: "url",
          render: (image) => <Image src={image} alt="picture" width={150}/>
        }
      ];


  return (
    <div>
     
     <Table 
           dataSource={dataSource} 
           columns={columns}
           pagination={{
            pageSize: rows
            // showSizeChanger: true,
    
            // pageSizeOptions: [5, 10, 15, 20]
           }}
            />;

    </div>
  )
}
