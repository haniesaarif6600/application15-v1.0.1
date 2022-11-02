import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  PagerIndicator,
  Button,
  Stack,
  Line,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertySetupPropertyDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate58() {
    navigate("/propertydetailsotherspaces");
  }
  function handleNavigate59() {
    navigate("/propertydetailsbedroomtwo");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[102px] 2xl:pb-[115px] 3xl:pb-[138px] lg:pb-[81px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
              <Row className="bg-gray_50 items-center justify-center lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[19%]">
                <Text className="Step1" variant="body4">
                  Name and location
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark"
                />
              </Row>
              <Column className="bg-gray_50 items-center pt-[4px] px-[4px] shadow-bs w-[19%]">
                <Text className="Step2" variant="body4">
                  Property Setup
                </Text>
                <PagerIndicator
                  className="h-[5px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[max-content]"
                  count={7}
                  activeCss="inline-block cursor-pointer w-[35px] h-[5px] bg-blue_300 shadow-bs3"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer w-[35px] h-[5px] bg-gray_502 shadow-bs3"
                  selectedWrapperCss="inline-block mx-[1px]"
                  unselectedWrapperCss="inline-block mx-[1px]"
                />
              </Column>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="xl"
              >
                Photos
              </Button>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="xl"
              >
                Pricing and calendar
              </Button>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[19%]"></div>
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Column className="justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pr-[3px] py-[3px] w-[40%]">
              <Text
                className="ml-[4px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Property Details
              </Text>
              <Column className="bg-white_A700 items-center justify-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs4 w-[99%]">
                <Column className="justify-start mb-[3px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[99%]">
                  <Column className="items-center justify-start w-[37%]">
                    <Text className="Firstlastname" variant="body2">
                      Where can people sleep?
                    </Text>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                    <Column className="bg-white_A700 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs5 w-[87%]">
                      <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[20%]">
                        <Text className="columneachpropertyw" variant="body4">
                          Bedroom 1
                        </Text>
                        <Text
                          className="font-normal font-ptsanscaption lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                          variant="body6"
                        >
                          1 double bed
                        </Text>
                      </Column>
                    </Column>
                    <Img
                      src="images/img_antdesignminu.svg"
                      className="lg:h-[33px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] lg:w-[32px] xl:w-[40px] 2xl:w-[46px] 3xl:w-[55px]"
                      alt="antdesignminu"
                    />
                  </Row>
                  <Column className="bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]">
                    <Column className="justify-start ml-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[19%]">
                      <Text className="Firstlastname" variant="body4">
                        Living Room
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Column
                    className="common-pointer bg-white_A700 justify-end lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs5 w-[87%]"
                    onClick={handleNavigate58}
                  >
                    <Column className="justify-start ml-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[20%]">
                      <Text className="Firstlastname" variant="body4">
                        Other spaces
                      </Text>
                      <Text className="weburl_Two" variant="body6">
                        0 beds
                      </Text>
                    </Column>
                  </Column>
                  <Row
                    className="common-pointer items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[19%]"
                    onClick={handleNavigate59}
                  >
                    <Img
                      src="images/img_plus.svg"
                      className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="plus"
                    />
                    <Text
                      className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] not-italic text-light_blue_800 w-[auto]"
                      variant="body7"
                    >
                      Add bedroom
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-end ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[99%]">
                <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[41%]">
                  <Text className="Firstlastname" variant="body4">
                    How many guests can stay?
                  </Text>
                  <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[59%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button"
                    />
                    <Text className="One" variant="body4">
                      1
                    </Text>
                  </Stack>
                  <Text
                    className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] Firstlastname"
                    variant="body4"
                  >
                    How many bathrooms are there?
                  </Text>
                </Column>
                <Stack className="bg-white_A700 lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[24%]">
                  <Img
                    src="images/img_button.svg"
                    className="button"
                    alt="button One"
                  />
                  <Text className="One" variant="body4">
                    1
                  </Text>
                </Stack>
              </Column>
              <Column className="bg-white_A700 justify-start ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[99%]">
                <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[68%]">
                  <Column className="justify-start w-[49%]">
                    <Text className="Firstlastname" variant="body4">
                      How big is this property?
                    </Text>
                    <Text
                      className="font-bold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Apartment size - optional
                    </Text>
                  </Column>
                  <Row className="items-center justify-evenly lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <div className="bg-white_A700 border-black_900 border-bw05 border-solid lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] rounded-radius3 w-[59%]"></div>
                    <Img
                      src="images/img_select.png"
                      className="lg:h-[23px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px] rounded-radius3 w-[41%]"
                      alt="Select"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] 3xl:mb-[90px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] shadow-bs4 w-[99%]">
                <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[96%]">
                  <Text className="columneachpropertyw" variant="body2">
                    What type of room do you offer?
                  </Text>
                  <Text className="Selectallthat" variant="body6">
                    Select all that apply
                  </Text>
                  <Row className="font-ptsans items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[16%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                    >
                      Universal
                    </Button>
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                    >
                      Muslim friendly
                    </Button>
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[22%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                    >
                      Muslim owned
                    </Button>
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[11%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                    >
                      Halal
                    </Button>
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                      shape="RoundedBorder15"
                      size="sm"
                      variant="OutlineGray502"
                    >
                      Pet-friendly
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:ml-[97px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[39%]" />
            <Row className="items-center xl:ml-[121px] 2xl:ml-[137px] 3xl:ml-[164px] lg:ml-[97px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="arrowleft1"
                  alt="arrowleft"
                />
              </Stack>
              <Button
                className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                variant="OutlineLightblue8001_2"
              >
                Continue
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertySetupPropertyDetailsPage;
