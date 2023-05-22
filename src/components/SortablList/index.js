import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { FaBars } from 'react-icons/fa'

const Listing = ({ listData, groupData, setgroupData, gId }) => {
    const [tags, setTags] = useState(listData)
    

const handleSort = sortedList => {
  setTags(sortedList)

  const newData = groupData.map(group => {
    if (group.id === gId) {
      return {
        ...group,
        tags: sortedList,
      }
    }
    return group
  })
  setgroupData(newData)
}

  return (
    <ReactSortable list={tags} setList={handleSort}>
      {tags.map((item, idx) => (
        <div key={idx}>
          <div className='drag-handle'>
            <FaBars />
          </div>
          <div><input placeholder='tagvalue'/></div>
        </div>
      ))}
    </ReactSortable>
  )
}

export default Listing
