import React from "react";

import MainHeadersection from "components/MainHeadersection";
import { Img, Text, Button, Line } from "components";
import MainCard from "components/MainCard";

const MainPage = () => {
  const mainCardPropList = [
    {
      image: "images/img_image_132x269.png",
      filesize:
        "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Rose Gold",
      price: "₦795,000",
    },
    {
      image: "images/img_image_1.png",
      filesize: "Phone 8 - 256GB, 4G LTE, Green (Refurbished)",
      price: "₦141,999",
    },
    {
      image: "images/img_image_2.png",
      filesize: "Modern Office Table Desk Computer Table Furniture",
      price: "₦37,000",
    },
    {
      image: "images/img_image_2.png",
      filesize: "Modern Office Table Desk Computer Table Furniture",
      price: "₦37,000",
    },
    {
      image: "images/img_image_132x268.png",
      filesize:
        "Acer Travelmate P2 15.6&quot; Fhd Core I7 -1165g7 256gb Ssd 8gb Ram, Win 10 Pro, 12 Hrs Battery Life, FingerPrint + Wireless Mouse",
      price: "₦377,000",
    },
    {
      image: "images/img_image_3.png",
      filesize: "Samsung Galaxy A23, 4GB/128GB Memory, Android 12 - Balck",
      price: "₦141,999",
    },
    {
      image: "images/img_image_4.png",
      filesize:
        "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Space Grey",
      price: "₦552,000",
    },
    {
      image: "images/img_image_4.png",
      filesize:
        "Apple MacBook Air 13&quot; M1 Chip 8GB 256GB 2020 Model - Space Grey",
      price: "₦552,000",
    },
  ];

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-ibmplexsans gap-[48px] items-start justify-start mx-[auto] pb-[48px] pt-[32px] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <MainHeadersection
          className="flex flex-col items-center justify-start w-[100%]"
          language="Welcome "
          supportingtext="Your current sales auction and activity."
          badge="2"
        />
        <div className="flex items-center justify-start w-[100%]">
          <div className="flex items-start justify-start sm:px-[20px] px-[32px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start max-w-[1294px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex items-start justify-start p-[24px] sm:px-[20px] rounded-[12px] shadow-bs1 w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col relative w-[100%]">
                    <div className="flex items-center justify-start mx-[auto] rounded-[12px] w-[100%]">
                      <Img
                        src="images/img_image.png"
                        className="h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-start mt-[-48px] mx-[auto] sm:px-[20px] px-[32px] w-[100%] z-[1]">
                      <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex h-[144px] items-center justify-start rounded-[50%] w-[144px]">
                          <Img
                            src="images/img_content.png"
                            className="h-[144px] md:h-[auto] rounded-[50%] w-[144px]"
                            alt="content"
                          />
                        </div>
                        <div className="flex flex-1 items-start justify-start pt-[64px] w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                            <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                              <Text
                                className="text-gray_900 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                Starts in: 3 days : 2 hours : 24 minutes{" "}
                              </Text>
                              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                                <Button
                                  className="bg-yellow_50 cursor-pointer flex items-center justify-center min-w-[88px] px-[11px] py-[4px] rounded-[14px] w-[auto]"
                                  leftIcon={
                                    <Img
                                      src="images/img_volume.svg"
                                      className="mr-[6px] my-[5px]"
                                      alt="volume"
                                    />
                                  }
                                >
                                  <div className="font-medium text-[14px] text-center text-deep_orange_900">
                                    Not Live
                                  </div>
                                </Button>
                                <Text
                                  className="not-italic text-bluegray_700 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Layers Auction{" "}
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start self-stretch w-[auto]">
                              <Button
                                className="bg-white_A700 border-[1px] border-bluegray_100 border-solid cursor-pointer flex items-center justify-center min-w-[143px] px-[14px] py-[8px] rounded-[8px] shadow-bs w-[auto]"
                                leftIcon={
                                  <Img
                                    src="images/img_thumbsup.svg"
                                    className="mb-[1px] mr-[8px]"
                                    alt="thumbs_up"
                                  />
                                }
                              >
                                <div className="font-semibold text-[14px] text-bluegray_800 text-left">
                                  Accept Invite
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex flex-col items-start justify-start rounded-[12px] shadow-bs1 w-[100%]">
                <div className="flex items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 h-[100%] items-start justify-start w-[100%]">
                        <Text
                          className="text-gray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Featured Items
                        </Text>
                      </div>
                      <div className="flex items-center justify-start self-stretch w-[auto]">
                        <Button className="bg-white_A700 border-[1px] border-bluegray_100 border-solid cursor-pointer font-semibold min-w-[114px] px-[14px] py-[8px] rounded-[8px] shadow-bs text-[14px] text-bluegray_800 text-center w-[auto]">
                          View Auction
                        </Button>
                      </div>
                    </div>
                    <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[24px] sm:px-[20px] px-[24px] w-[100%]">
                  <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    {mainCardPropList.map((props, index) => (
                      <React.Fragment key={`MainCard${index}`}>
                        <MainCard
                          className="bg-white_A700 border-[1px] border-bluegray_100 border-solid pt-3 flex flex-1 flex-col items-start justify-start p-[12px] rounded-[12px] w-[100%]"
                          avatar="KO"
                          text="Koray Okumus (Highest Bidder)"
                          currentbid="Current Bid:"
                          addToWishlist="Add to wishlist"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
