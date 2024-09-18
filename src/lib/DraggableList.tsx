import { useState } from "react";

type DraggedItem = {
  index: number;
  item: string;
};

type DraggableListProps = {
  list: string[];
};

const DraggableList = ({ list }: DraggableListProps) => {
  const [orderedList, setOrderedList] = useState(list);
  const [draggedInItem, setDraggedInItem] = useState<DraggedItem>();

  const handleDragStart = ({ item, index }: DraggedItem) => {
    setDraggedInItem({ item, index });
  };

  const handleDragOver = (draggedOverItem: DraggedItem) => {
    if (!draggedInItem || draggedInItem.item === draggedOverItem.item) return;

    const isUpping = draggedInItem.index > draggedOverItem.index;

    setOrderedList((orderedList) =>
      orderedList.flatMap((item) => {
        if (draggedInItem.item === item) return [];

        if (draggedOverItem.item === item) {
          return isUpping ? [draggedInItem.item, item] : [item, draggedInItem.item];
        }

        return item;
      })
    );
  };

  return (
    <ol type="1">
      {orderedList.map((item, index) => (
        <li
          key={index}
          draggable={true}
          onDragStart={() => handleDragStart({ item, index })}
          onDragOver={() => handleDragOver({ item, index })}
        >
          {item}
        </li>
      ))}
    </ol>
  );
};

export default DraggableList;
