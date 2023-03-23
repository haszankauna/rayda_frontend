import React from "react";

import { Text, Button, Img, Line } from "components";

const MainHeadersection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-start sm:px-[20px] px-[32px] w-[100%]">
          <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
              <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                <Text
                  className="font-ibmplexsans text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  {props?.language}
                </Text>
                <Text
                  className="font-ibmplexsans not-italic text-bluegray_700 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  {props?.supportingtext}
                </Text>
              </div>
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <div className="h-[44px] relative w-[49px]">
                  <Button className="absolute bg-white_A700 flex h-[44px] inset-y-[0] items-center justify-center left-[0] my-[auto] p-[10px] rounded-[6px] w-[44px]">
                    <Img
                      src="images/img_notification.svg"
                      className="h-[24px]"
                      alt="notification"
                    />
                  </Button>
                  <Text
                    className="absolute bg-red_500 bottom-[0] font-ibmplexsans font-medium justify-center px-[8px] py-[2px] right-[0] rounded-[11px] self-stretch text-center text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    {props?.badge}
                  </Text>
                </div>
              </div>
            </div>
            <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

MainHeadersection.defaultProps = {
  language: "Welcome ",
  supportingtext: "Your current sales auction and activity.",
  badge: "2",
};

export default MainHeadersection;
