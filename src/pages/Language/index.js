import React from "react";

import { Column, Row, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";

const LanguagePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
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
              <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[99%]">
                <Text className="Firstlastname" variant="body4">
                  Property Setup
                </Text>
                <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <div className="bg-green_201 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-light_blue_800 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-gray_502 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                  <div className="bg-gray_502 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                </Row>
              </Column>
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
          <Column className="justify-start xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[40%]">
            <Text className="Firstlastname" as="h5" variant="h5">
              What language do you or your staff speak?
            </Text>
            <Stack className="lg:h-[405px] xl:h-[507px] 2xl:h-[570px] 3xl:h-[684px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]">
              <Line className="absolute bg-gray_200_ce h-[1px] inset-x-[0] mx-[auto] top-[47%] w-[95%]" />
              <Column className="absolute bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Column className="justify-start lg:mb-[162px] xl:mb-[202px] 2xl:mb-[228px] 3xl:mb-[273px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[37%]">
                  <Column className="items-end justify-start w-[63%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      Select language
                    </Text>
                    <Row className="items-center justify-between ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[93%]">
                      <Column className="items-center w-[23%]">
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
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
                        <Button
                          className="flex lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] items-center justify-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
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
                      </Column>
                      <Column className="w-[71%]">
                        <Text className="Firstlastname" variant="body2">
                          Arabic
                        </Text>
                        <Text className="Maincard" variant="body2">
                          Cantonese
                        </Text>
                        <Text
                          className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] Firstlastname"
                          variant="body2"
                        >
                          Chinese
                        </Text>
                        <Text className="Maincard" variant="body2">
                          English
                        </Text>
                        <Text
                          className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] Firstlastname"
                          variant="body2"
                        >
                          Malay
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_301 underline w-[auto]">
                      Add additional languages
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[37%]" />
          <Row className="items-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
            <Stack className="bg-white_A700 border border-light_blue_800 border-solid lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] rounded-radius2 w-[11%]">
              <Img
                src="images/img_arrowleft_26X26.svg"
                className="arrowleft"
                alt="arrowleft"
              />
            </Stack>
            <Button
              className="font-bold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_101 w-[87%]"
              shape="RoundedBorder3"
              variant="OutlineLightblue8001_2"
            >
              Continue
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default LanguagePage;
