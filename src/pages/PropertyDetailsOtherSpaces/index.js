import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  PagerIndicator,
  Button,
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const PropertyDetailsOtherSpacesPage = () => {
  const navigate = useNavigate();

  function handleNavigate40() {
    navigate("/propertysetuppropertydetails");
  }
  function handleNavigate41() {
    navigate("/propertysetuppropertydetails");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans justify-start mx-[auto] lg:pb-[118px] xl:pb-[147px] 2xl:pb-[166px] 3xl:pb-[199px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="2xl:h-[102px] 3xl:h-[122px] lg:h-[72px] xl:h-[90px] w-[100%]">
            <Img src="images/img_user_35X35.svg" className="user" alt="user" />
            <Row className="absolute bg-indigo_901 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
              <Row className="items-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
                <Text className="language2" as="h1" variant="h1">
                  <span className="text-light_green_A400 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Halal
                  </span>
                  <span className="text-blue_600 font-harmattan font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    Holiday
                  </span>
                  <span className="text-white_A700 font-ptsans font-bold lg:text-[32px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px]">
                    {" "}
                  </span>
                </Text>
                <Column className="items-center justify-start lg:ml-[369px] xl:ml-[461px] 2xl:ml-[519px] 3xl:ml-[623px] w-[22%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="font-ptsans items-center justify-end ml-[auto] w-[64%]">
                      <Text
                        className="font-bold text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Name’s Property
                      </Text>
                      <Img
                        src="images/img_arrow1.svg"
                        className="ArrowOne"
                        alt="ArrowOne"
                      />
                    </Row>
                    <Text className="columnnamesproperty" variant="body6">
                      122 Jalan Abc, Johor Bahru, Johor 8350...{" "}
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_minimize.svg"
                  className="minimize"
                  alt="minimize"
                />
                <Text className="Help" variant="body1">
                  Help
                </Text>
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Img
                  src="images/img_user_35X35.svg"
                  className="user_One"
                  alt="user One"
                />
              </Row>
            </Row>
          </Stack>
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
        </Column>
        <Column className="font-ptsanscaption items-center justify-start xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[40%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-normal ml-[4px] text-black_900 w-[auto]"
              variant="body1"
            >
              Other Spaces
            </Text>
            <Stack className="lg:h-[348px] xl:h-[435px] 2xl:h-[489px] 3xl:h-[586px] ml-[3px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]">
              <Column className="absolute bg-white_A700 justify-start left-[0] lg:py-[20px] xl:py-[25px] 2xl:py-[29px] 3xl:py-[34px] shadow-bs4 w-[100%]">
                <Column className="items-center justify-start lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[61%]">
                  <Text
                    className="font-normal text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Which beds are available in this room?
                  </Text>
                </Column>
                <Column className="justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] 3xl:mt-[117px] lg:mt-[69px] xl:mt-[87px] 2xl:mt-[98px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listcar">
                      <Img src="images/img_car.svg" className="car" alt="car" />
                      <Row className="items-center justify-between mb-[1px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[83%]">
                        <Column className="pt-[3px] w-[28%]">
                          <Column className="items-center justify-start w-[72%]">
                            <Text
                              className="font-normal text-black_900 w-[auto]"
                              variant="body4"
                            >
                              Double bed
                            </Text>
                          </Column>
                          <Text className="columndoublebed" variant="body6">
                            131 - 150 cm wide
                          </Text>
                        </Column>
                        <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                          <Img
                            src="images/img_button.svg"
                            className="button"
                            alt="button"
                          />
                          <Text className="One" variant="body4">
                            1
                          </Text>
                        </Stack>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-start lg:my-[25px] xl:my-[32px] 2xl:my-[36px] 3xl:my-[43px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                      <Img
                        src="images/img_car.svg"
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                        alt="car One"
                      />
                      <Row className="items-start justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] pb-[1px] w-[82%]">
                        <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pr-[4px] pt-[4px] w-[64%]">
                          <Column className="items-center justify-start ml-[1px] w-[97%]">
                            <Text className="Sofa" variant="body4">
                              Extra-large double bed(Super-king size
                            </Text>
                          </Column>
                          <Text className="columnextralargedou" variant="body6">
                            181 - 210 cm wide
                          </Text>
                        </Column>
                        <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                          <Img
                            src="images/img_button.svg"
                            className="button"
                            alt="button One"
                          />
                          <Text className="One" variant="body4">
                            1
                          </Text>
                        </Stack>
                      </Row>
                    </Row>
                  </List>
                  <Row className="font-ptsans items-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[21%]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] w-[5%]"
                      alt="arrowright"
                    />
                    <Text className="Moreoption" variant="body6">
                      More bed options
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Row className="absolute bg-white_A700 bottom-[40%] inset-x-[0] items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                <Img
                  src="images/img_car.svg"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  alt="car Two"
                />
                <Row className="items-end justify-between lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[83%]">
                  <Column className="justify-start mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pr-[4px] pt-[4px] w-[38%]">
                    <Column className="items-center justify-start w-[96%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body4"
                      >
                        Large bed(King size)
                      </Text>
                    </Column>
                    <Text className="columndoublebed" variant="body6">
                      151 - 180 cm wide
                    </Text>
                  </Column>
                  <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[29%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button Two"
                    />
                    <Text className="One" variant="body4">
                      1
                    </Text>
                  </Stack>
                </Row>
              </Row>
              <Column className="absolute bg-white_A700 inset-x-[0] items-center justify-end xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] top-[15%] w-[100%]">
                <Row className="items-start mt-[3px] w-[94%]">
                  <Img
                    src="images/img_bag.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mt-[1px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    alt="bag"
                  />
                  <Column className="justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[2px] pt-[3px] w-[23%]">
                    <Column className="items-center justify-start w-[71%]">
                      <Text
                        className="font-normal text-black_900 w-[auto]"
                        variant="body4"
                      >
                        Single bed
                      </Text>
                    </Column>
                    <Text className="columndoublebed" variant="body6">
                      90 - 130 cm wide
                    </Text>
                  </Column>
                  <Stack className="bg-white_A700 font-ptsans lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[142px] xl:ml-[178px] 2xl:ml-[201px] 3xl:ml-[241px] outline outline-[0.5px] outline-black_900 xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[26%]">
                    <Img
                      src="images/img_button.svg"
                      className="button"
                      alt="button Three"
                    />
                    <Text className="One" variant="body4">
                      1
                    </Text>
                  </Stack>
                </Row>
              </Column>
            </Stack>
            <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[99%]" />
            <Row className="font-ptsans items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
              <Button
                className="flex items-center justify-center text-center w-[25%]"
                onClick={handleNavigate40}
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="text-center lg:w-[4px] lg:mr-[4px] xl:w-[6px] xl:mr-[6px] 2xl:w-[7px] 2xl:mr-[7px] 3xl:w-[8px] 3xl:mr-[8px]"
                    alt="arrow_left"
                  />
                }
                variant="OutlineLightblue800"
              >
                <div className="common-pointer bg-transparent font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Cancel
                </div>
              </Button>
              <Button
                className="common-pointer font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[72%]"
                onClick={handleNavigate41}
                variant="OutlineLightblue8001_2"
              >
                Save
              </Button>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsOtherSpacesPage;
