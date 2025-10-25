import React from "react";

const DetailDescribetion = ({ selectedApp }) => {
  console.log(selectedApp);
  return (
    <div>
      <h4 className="mb-3 text-[24px] font-semibold">Describetion</h4>
      <p className="text-xl text-[#627382]">{selectedApp?.description}</p>
    </div>
  );
};

export default DetailDescribetion;
