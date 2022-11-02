import React from "react";

import { Column, Text, Row, Button, Img, Line, Input, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const QuestionaboutpropertyPage = () => {
  const navigate = useNavigate();

  function handleNavigate60() {
    navigate("/confirmation");
  }
  function handleNavigate61() {
    window.location.href = "https://www.airbnb.com/rooms/xxxxxxxx";
  }
  function handleNavigate62() {
    window.location.href = "https://www.vrbo.com/xxxxxx";
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 3xl:pb-[102px] lg:pb-[60px] xl:pb-[75px] 2xl:pb-[85px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start 3xl:ml-[116px] lg:ml-[68px] xl:ml-[86px] 2xl:ml-[97px] 3xl:mt-[104px] lg:mt-[61px] xl:mt-[77px] 2xl:mt-[87px] w-[42%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h4"
              variant="h4"
            >
              Where else is your property listed?
            </Text>
            <Column className="items-center justify-start lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[94%]">
              <Column className="bg-white_A700 items-center justify-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] shadow-bs4 w-[100%]">
                <Column className="justify-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[97%]">
                  <Text
                    className="font-normal leading-[normal] not-italic text-black_900 w-[80%]"
                    variant="body4"
                  >
                    If your property is listed in Airbnb or Vrbo, you can speed
                    up
                    <br />
                    registration by importing it directly to HalalHoliday.com
                  </Text>
                  <Row className="items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius4 w-[17%]">
                    <Button
                      className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineGray501"
                    >
                      <Img
                        src="images/img_vector_24X24.svg"
                        className="flex items-center justify-center"
                        alt="Vector"
                      />
                    </Button>
                    <Text className="Airbnb" variant="body2">
                      Airbnb
                    </Text>
                  </Row>
                  <Row className="items-end xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius4 w-[24%]">
                    <Button
                      className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineGray501"
                    >
                      <Img
                        src="images/img_vector_24X24.svg"
                        className="flex items-center justify-center"
                        alt="Vector One"
                      />
                    </Button>
                    <Text className="TripAdvisor" variant="body2">
                      TripAdvisor
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius4 w-[14%]">
                    <Button
                      className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineGray501"
                    >
                      <Img
                        src="images/img_vector_24X24.svg"
                        className="flex items-center justify-center"
                        alt="Vector Two"
                      />
                    </Button>
                    <Text
                      className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] Firstlastname"
                      variant="body2"
                    >
                      Vrbo
                    </Text>
                  </Row>
                  <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius4 w-[32%]">
                    <Button
                      className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineGray501"
                    >
                      <Img
                        src="images/img_vector_24X24.svg"
                        className="flex items-center justify-center"
                        alt="Vector Three"
                      />
                    </Button>
                    <Text className="mt-[3px] Airbnb" variant="body2">
                      Another website
                    </Text>
                  </Row>
                  <Row className="items-end xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[75%]">
                    <Button
                      className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                      shape="icbRoundedBorder4"
                      size="smIcn"
                      variant="icbOutlineGray501"
                    >
                      <Img
                        src="images/img_vector_24X24.svg"
                        className="flex items-center justify-center"
                        alt="Vector Four"
                      />
                    </Button>
                    <Text className="TripAdvisor" variant="body2">
                      My property isn’t listed on any other websites
                    </Text>
                  </Row>
                  <Line className="bg-gray_700_33 h-[1.5px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
                  <Text
                    className="font-bold ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-black_900 w-[auto]"
                    variant="body4"
                  >
                    Import property details from Airbnb or Vrbo
                  </Text>
                  <Text className="Priceguestspa" variant="body6">
                    Paste the link to your Airbnb or Vrbo listing
                  </Text>
                  <Row className="items-center ml-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[83%]">
                    <Input
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      wrapClassName="w-[74%]"
                      name="weburl"
                      placeholder="https://www.airbnb.com/rooms/xxxxxxxx"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineGray502"
                    ></Input>
                    <Button
                      className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                      shape="RoundedBorder3"
                      size="sm"
                      variant="OutlineBluegray101"
                    >
                      Apply
                    </Button>
                  </Row>
                  <Text
                    className="font-normal ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-gray_500 w-[auto]"
                    variant="body6"
                  >
                    Example link:
                  </Text>
                  <Text
                    className="common-pointer font-normal ml-[1px] mt-[3px] not-italic text-gray_500 w-[auto]"
                    variant="body6"
                    onClick={handleNavigate61}
                  >
                    https://www.airbnb.com/rooms/xxxxxxxx
                  </Text>
                  <Text
                    className="common-pointer weburl_Two"
                    variant="body6"
                    onClick={handleNavigate62}
                  >
                    https://www.vrbo.com/xxxxxx
                  </Text>
                  <Text
                    className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-light_blue_800 w-[auto]"
                    variant="body4"
                  >
                    Where I can find this link?
                  </Text>
                </Column>
              </Column>
              <Line className="bg-gray_700_33 h-[0.5px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[100%]" />
              <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]">
                <Stack
                  className="common-pointer bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]"
                  onClick={handleNavigate60}
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="arrowleft1"
                    alt="arrowleft"
                  />
                </Stack>
                <Button
                  className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                  variant="OutlineLightblue8001_2"
                >
                  Continue
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default QuestionaboutpropertyPage;
