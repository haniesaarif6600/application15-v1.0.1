import React from "react";

import { Stack, Row, Text, Img } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Stack className="bg-indigo_901 2xl:h-[105px] 3xl:h-[125px] lg:h-[74px] xl:h-[93px] w-[100%]">
          <Row className="absolute bottom-[21%] inset-x-[0] items-end mx-[auto] w-[93%]">
            <Text
              className="font-ptsans lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-white_A700 w-[auto]"
              as="h3"
              variant="h3"
            >
              HalalHoliday
            </Text>
            <Text
              className="font-ptsans leading-[normal] lg:ml-[377px] xl:ml-[472px] 2xl:ml-[531px] 3xl:ml-[637px] mt-[1px] text-right text-white_A700 w-[26%]"
              as="h3"
              variant="h3"
            >
              <span className="text-white_A700 font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                Hanisah Property
                <br />
              </span>
              <span className="text-white_A700 font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Bangi Gateway, Bandar Baru Bangi, Selangor,43650
              </span>
            </Text>
            <Img
              src="images/img_expandarrow.png"
              className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
              alt="ExpandArrow"
            />
            <Img
              src="images/img_greatbritain.png"
              className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[4px] w-[3%]"
              alt="GreatBritain"
            />
            <Row className="items-end justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[6%]">
              <Text className="rowhelp1" as="h6" variant="h6">
                Help
              </Text>
              <Stack className="bg-amber_500 mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] outline outline-[2px] outline-white_A700 px-[1px] rounded-radius50 mdihomegroup">
                <Img
                  src="images/img_questionmark.png"
                  className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[86%]"
                  alt="QuestionMark"
                />
              </Stack>
            </Row>
            <Img
              src="images/img_maleuser.png"
              className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[3%]"
              alt="MaleUser"
            />
          </Row>
          <Row className="absolute bg-indigo_901 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Row className="items-end lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
              <Text
                className="font-ptsans lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                HalalHoliday
              </Text>
              <Text
                className="font-ptsans leading-[normal] lg:ml-[377px] xl:ml-[472px] 2xl:ml-[531px] 3xl:ml-[637px] mt-[1px] text-right text-white_A700 w-[26%]"
                as="h3"
                variant="h3"
              >
                <span className="text-white_A700 font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                  Hanisah Property
                  <br />
                </span>
                <span className="text-white_A700 font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Bangi Gateway, Bandar Baru Bangi, Selangor,43650
                </span>
              </Text>
              <Img
                src="images/img_expandarrow.png"
                className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="ExpandArrow One"
              />
              <Img
                src="images/img_greatbritain.png"
                className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[4px] w-[3%]"
                alt="GreatBritain One"
              />
              <Row className="items-end justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[6%]">
                <Text className="rowhelp1" as="h6" variant="h6">
                  Help
                </Text>
                <Stack className="bg-amber_500 mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] outline outline-[2px] outline-white_A700 px-[1px] rounded-radius50 mdihomegroup">
                  <Img
                    src="images/img_questionmark.png"
                    className="absolute lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[86%]"
                    alt="QuestionMark One"
                  />
                </Stack>
              </Row>
              <Img
                src="images/img_maleuser.png"
                className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[3%]"
                alt="MaleUser One"
              />
            </Row>
          </Row>
        </Stack>
      </header>
    </>
  );
};

export default Header2;
