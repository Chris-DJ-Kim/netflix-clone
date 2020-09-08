import React from "react";

function RowItem({ showData: { title, name }, imageUrl }) {
  //Some movie entries have 'titles', others have 'names'
  const titleOrName = title ? title : name;
  console.log(titleOrName);
  return (
    <div className="row__item">
      <img src={imageUrl} alt={titleOrName} />
      {titleOrName}
    </div>
  );
}
export default RowItem;
