import React from "react";
import "../../sass/components/row-item.scss";

function RowItem({ showData: { title, name }, imageUrl }) {
  //Some movie entries have 'titles', others have 'names'
  const titleOrName = title ? title : name;
  return (
    <div className="row__item">
      <img src={imageUrl} alt={titleOrName} />
    </div>
  );
}
export default RowItem;
