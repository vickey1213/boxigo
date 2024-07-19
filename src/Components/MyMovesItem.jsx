import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaBoxes } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import {
  BsCalendar2CheckFill,
  BsPen,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
import InventoryDetailsItem from "./InventoryDetailsItem";

const MyMovesItem = ({
  movingItemDetails: {
    movingFrom,
    movingTo,
    estimateId,
    propertySize,
    totalItems,
    distance,
    movingOn,
    customStatus,
    newHouseAdditionalInfo,
    oldHouseAdditionalInfo,
    newFloorNo,
    oldFloorNo,
    newElevatorAvailability,
    oldElevatorAvailability,
    newParkingDistance,
    oldParkingDistance,
  },
  inventoryItemsData = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <li className="mb-4">
      <div className="from-to-address-container mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="from-address-container">
            <h1 className="text-lg font-bold">From</h1>
            <p className="text-gray-600">{movingFrom}</p>
          </div>
          <div className="next-arrow-container mx-4">
            <HiOutlineArrowNarrowRight className="text-2xl text-orange-600" />
          </div>
          <div className="to-address-container">
            <h1 className="text-lg font-bold">To</h1>
            <p className="text-gray-600">{movingTo}</p>
          </div>
        </div>
        <div className="estimate-id-container">
          <h1 className="text-xl antialiased font-extrabold">Request#</h1>
          <p className="text-orange-500 font-semibold">{estimateId}</p>
        </div>
      </div>

      <div className="moving-details-container flex flex-wrap items-center gap-6 mb-4 pb-6">
        <div className="moving-details-item-container flex items-center">
          <AiFillHome className="text-xl text-orange-600 mr-2" />
          <p className="text-gray-600">{propertySize}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <FaBoxes className="text-xl text-orange-600 mr-2" />
          <p className="text-gray-600">{totalItems}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <GiPathDistance className="text-xl text-orange-600 mr-2" />
          <p className="text-gray-600">{distance}</p>
        </div>
        <div className="moving-details-item-container flex items-center">
          <BsCalendar2CheckFill className="text-xl text-orange-600 mr-2" />
          <p className="text-gray-600">{movingOn}</p>
          <BsPen className="ml-2 text-gray-600" />
          <IoCheckbox className="ml-2 text-orange-600" />
          <p className="ml-2 text-gray-600">is flexible</p>
        </div>
        <div className="flex flex-wrap items-center space-x-4">
          <button
            type="button"
            className={`view-move-details-btn border-2 ${
              isExpanded
                ? "border-green-400 text-green-400"
                : "border-red-400 text-red-400"
            } bg-white hover:bg-orange-600 hover:border-transparent hover:text-white px-4 py-2 rounded`}
            onClick={toggleExpand}
          >
            {isExpanded ? "Hide move details" : "View move details"}
          </button>
          <button
            type="button"
            className="quotes-btn bg-orange-600 text-white px-4 py-2 rounded hover:bg-green-500"
          >
            {customStatus}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 py-4">
        <BiSolidError className="text-orange-600" />
        <span>
          <strong>Disclaimer</strong>: Please update your move dates before two
          days of shifting
        </span>
      </div>

      {isExpanded && (
        <div>
          <Section
            title="Additional Information"
            content={
              <>
                <p className="text-gray-600 mb-4">{oldHouseAdditionalInfo}</p>
                <p className="text-gray-600 mb-4">{newHouseAdditionalInfo}</p>
              </>
            }
            onEdit={() => {}}
          />
          <Section
            title="House Details"
            content={
              <>
                <HouseDetails
                  title="Existing House Details"
                  details={[
                    { label: "Floor No.", value: oldFloorNo },
                    {
                      label: "Elevator Available",
                      value: oldElevatorAvailability,
                    },
                    {
                      label: "Distance from Elevator/Staircase to truck",
                      value: oldParkingDistance,
                    },
                  ]}
                />
                <HouseDetails
                  title="New House Details"
                  details={[
                    { label: "Floor No.", value: newFloorNo },
                    {
                      label: "Elevator Available",
                      value: newElevatorAvailability,
                    },
                    {
                      label: "Distance from Elevator/Staircase to truck",
                      value: newParkingDistance,
                    },
                  ]}
                />
              </>
            }
            onEdit={() => {}}
          />
          <Section
            title="Inventory Details"
            content={
              <ul className="inventory-item-details-list-container">
                {inventoryItemsData.map((each) => (
                  <InventoryDetailsItem
                    inventoryItemDetails={each}
                    key={each.id}
                    categoryData={each.category?.map((elem) => elem)}
                  />
                ))}
              </ul>
            }
            onEdit={() => {}}
          />
        </div>
      )}
      <hr className="border-gray-300 mt-4" />
    </li>
  );
};

const Section = ({ title, content, onEdit }) => (
  <div className="mb-4">
    <div className="flex justify-between additional-information-container mb-4">
      <h1 className="text-lg font-bold">{title}</h1>
      <button
        type="button"
        className="ml-4 bg-black text-white p-2 rounded-sm"
        onClick={onEdit}
      >
        Edit {title}
      </button>
    </div>
    {content}
  </div>
);

const HouseDetails = ({ title, details }) => (
  <>
    <h1 className="existing-house-details-item-heading text-orange-500 font-bold mb-2">
      {title}
    </h1>
    <div className="existing-house-details-container grid grid-cols-3 gap-4 mb-4">
      {details.map((detail) => (
        <div className="existing-house-details-item" key={detail.label}>
          <h1 className="text-md font-bold">{detail.label}</h1>
          <p className="text-gray-600">{detail.value}</p>
        </div>
      ))}
    </div>
  </>
);

export default MyMovesItem;
