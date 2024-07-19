import React from 'react'

const CategoryItem = ({catElem}) => {
    console.log(catElem);


    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {catElem.map((elem) => (
            <div key={elem.order} className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center">
              <p className="font-semibold text-gray-800">{elem.displayName}</p>
              <p className="text-gray-600">{elem.order}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default CategoryItem
