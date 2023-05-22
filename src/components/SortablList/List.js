import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { FaBars } from 'react-icons/fa'
import './index.css'
import Listing from '.'
const List = () => {
  const [groupData, setgroupData] = useState([
    {
      id: 1,
      name: 'group1',
      tags: ['item1', 'item2', 'item3'],
    },
    {
      id: 2,
      name: 'group2',
      tags: ['item1', 'item2', 'item3'],
    },
    {
      id: 3,
      name: 'group3',
      tags: ['item1', 'item2', 'item3'],
    },
  ])

  const handleSort = sortedList => {
    console.log(sortedList)
    setgroupData(sortedList)
  }
  console.log('i am g data', groupData)

  return (
    <div>
      <ReactSortable list={groupData} setList={handleSort}>
        {groupData.map(item => (
          <div key={item?.id}>
            <div className='drag-handle'>
              <FaBars />
            </div>
            <div>{item?.name}</div>
            <div className='main'>
                    {<Listing listData={item?.tags} groupData={ groupData} gId={ item?.id} setgroupData={setgroupData} />}
            </div>
          </div>
        ))}
      </ReactSortable>
    </div>
  )
}

export default List
