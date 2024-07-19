import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryDetails = ({ categoryData, inventoryItemDetails }) => {
  

  console.log(categoryData);
  console.log(categoryData.displayName)

  return (
    <div>
      {/* <p>{categoryData.displayName}</p> */}
      {categoryData.map((elem)=>(
        <div>
          <h1 className="text-xl font-semibold">{elem.displayName}</h1>
          <CategoryItem catElem={elem?.items?.map((elem)=>elem)}/>
        </div>
        
      ))}
    </div>
  );
};

export default CategoryDetails;
