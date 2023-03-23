import React from "react";

import { Img, Text, Line, Button } from "components";

const MainCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.image}
          className="h-[132px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
          alt="image"
        />
        <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
          <div className="flex flex-row gap-[8px] items-center justify-start py-[4px] w-[100%]">
            <Text
              className="bg-gray_100 flex font-ibmplexsans font-medium h-[32px] items-center justify-center rounded-[50%] text-bluegray_700 text-center w-[32px]"
              as="h5"
              variant="h5"
            >
              {props?.avatar}
            </Text>
            <div className="flex items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-ibmplexsans font-semibold text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                {props?.text}
              </Text>
            </div>
          </div>
          <Text
            className="font-ibmplexsans font-semibold leading-[20.00px] md:max-w-[100%] max-w-[269px] text-gray_900 text-left"
            as="h5"
            variant="h5"
          >
            {props?.filesize}
          </Text>
          <div className="flex flex-row gap-[4px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="font-ibmplexsans font-normal not-italic text-bluegray_800 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              {props?.currentbid}
            </Text>
            <Text
              className="font-bold font-ibmplexsans text-bluegray_800 text-right w-[auto]"
              as="h5"
              variant="h5"
            >
              {props?.price}
            </Text>
          </div>
          <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
        </div>
        <div className="flex items-center justify-start w-[100%]">
          <Button className="bg-blue_800 border-[1px] border-blue_800 border-solid cursor-pointer font-ibmplexsans font-semibold px-[16px] py-[10px] rounded-[8px] shadow-bs text-[14px] text-center text-white_A700 w-[100%]">
            {props?.addToWishlist}
          </Button>
        </div>
      </div>
    </>
  );
};

MainCard.defaultProps = {
  image: "images/img_image_132x269.png",
  avatar: "KO",
  text: "Koray Okumus (Highest Bidder)",
  filesize:
    "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Rose Gold",
  currentbid: "Current Bid:",
  price: "₦795,000",
  addToWishlist: "Add to wishlist",
};

export default MainCard;
