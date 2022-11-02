import React from "react";

import { Column, Row, Text, Img, Button, List, Line, Stack } from "components";
import Header from "components/Header/Header";

const PropertySetupAmenitiesPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[45px] xl:pb-[56px] 2xl:pb-[64px] 3xl:pb-[76px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Row className="font-ptsans items-center justify-evenly w-[100%]">
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
                    <div className="bg-blue_300 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-gray_502 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-gray_502 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-gray_502 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
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
            <Text
              className="font-normal font-ptsanscaption xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-black_900 w-[auto]"
              variant="body1"
            >
              What can guests use at your place?
            </Text>
            <Row className="font-ptsanscaption items-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[64%]">
              <List
                className="bg-white_A700 gap-[0] min-h-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] shadow-bs4 w-[61%]"
                orientation="vertical"
              >
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[189px] xl:mr-[237px] 2xl:mr-[267px] 3xl:mr-[320px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] rounded-radius4 w-[47%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    General
                  </Text>
                  <Row className="font-ptsans items-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[55%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[3px] px-[4px] rounded-radius4 w-[13%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector"
                      />
                    </Stack>
                    <Text className="Airconditionin" variant="body4">
                      Air conditioning
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[32%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[3px] px-[4px] rounded-radius4 w-[22%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector One"
                      />
                    </Stack>
                    <Text className="Airconditionin" variant="body4">
                      Heating
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[35%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[20%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Two"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Free Wifi
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[100%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[3px] px-[4px] rounded-radius4 w-[7%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Three"
                      />
                    </Stack>
                    <Text className="Airconditionin" variant="body4">
                      Electric vehicle charging station
                    </Text>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Stack className="lg:h-[109px] xl:h-[136px] 2xl:h-[153px] 3xl:h-[183px] mx-[auto] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] w-[99%]">
                  <Line className="absolute bg-gray_700_33 bottom-[7%] h-[1.5px] w-[100%]" />
                  <Column className="absolute justify-start left-[0] lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] rounded-radius4 w-[37%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      Cooking and cleaning
                    </Text>
                    <Row className="font-ptsans items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-radius4 w-[40%]">
                      <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[22%]">
                        <Img
                          src="images/img_vector_4X9.svg"
                          className="Vector1"
                          alt="Vector One"
                        />
                      </Stack>
                      <Text className="iconradio2" variant="body4">
                        Kitchen
                      </Text>
                    </Row>
                    <Row className="font-ptsans items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[54%]">
                      <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[16%]">
                        <Img
                          src="images/img_vector_4X9.svg"
                          className="Vector1"
                          alt="Vector One One"
                        />
                      </Stack>
                      <Text className="iconradio2" variant="body4">
                        Kitchenette
                      </Text>
                    </Row>
                    <Row className="font-ptsans items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius4 w-[75%]">
                      <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] px-[4px] rounded-radius4 w-[12%]">
                        <Img
                          src="images/img_vector_4X9.svg"
                          className="Vector1"
                          alt="Vector Two One"
                        />
                      </Stack>
                      <Text className="Airconditionin" variant="body4">
                        Washing machine
                      </Text>
                    </Row>
                  </Column>
                </Stack>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[21px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[269px] xl:mr-[337px] 2xl:mr-[379px] 3xl:mr-[455px] mt-[17.92px] pb-[2px] rounded-radius4 w-[25%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Entertainment
                  </Text>
                  <Row className="font-ptsans items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius4 w-[93%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[14%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Two"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Flat-screen TV
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 w-[100%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[3px] px-[4px] rounded-radius4 w-[13%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector One Two"
                      />
                    </Stack>
                    <Text className="Airconditionin" variant="body4">
                      Swimming pool
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius4 w-[57%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[23%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Two Two"
                      />
                    </Stack>
                    <Text className="Hottub" variant="body4">
                      Hot tub
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 w-[58%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[22%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Three One"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Minibar
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 w-[50%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[26%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Four"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Sauna
                    </Text>
                  </Row>
                </Column>
                <Line className="self-center w-[99%] h-[1.5px] bg-gray_700_33" />
                <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[253px] xl:mr-[317px] 2xl:mr-[357px] 3xl:mr-[428px] lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[21px] pb-[2px] rounded-radius4 w-[30%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Outside and view
                  </Text>
                  <Row className="font-ptsans items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius4 w-[51%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[3px] px-[4px] rounded-radius4 w-[22%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Three"
                      />
                    </Stack>
                    <Text className="Airconditionin" variant="body4">
                      Balcony
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius4 w-[71%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[16%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector One Three"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Garden view
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius4 w-[48%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[23%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Two Three"
                      />
                    </Stack>
                    <Text className="iconradio2" variant="body4">
                      Terrace
                    </Text>
                  </Row>
                  <Row className="font-ptsans items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius4 w-[38%]">
                    <Stack className="bg-white_A700 border border-gray_501 border-solid lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] px-[4px] rounded-radius4 w-[29%]">
                      <Img
                        src="images/img_vector_4X9.svg"
                        className="Vector1"
                        alt="Vector Three Two"
                      />
                    </Stack>
                    <Text className="Hottub" variant="body4">
                      View
                    </Text>
                  </Row>
                </Column>
              </List>
              <Column className="bg-white_A700 font-ptsans items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] shadow-bs4 w-[37%]">
                <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lightbulb"
                      alt="lightbulb"
                    />
                    <Text className="rowlightbulb" variant="body2">
                      What if i don’t see a facility I offer?
                    </Text>
                    <Img
                      src="images/img_close_23X23.svg"
                      className="close_One1"
                      alt="close"
                    />
                  </Row>
                  <Text
                    className="font-normal leading-[normal] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-black_900 w-[77%]"
                    variant="body5"
                  >
                    The facilities listed here are the ones most searched for by
                    guests. After you complete your registeration, you can add
                    more facilities from a larger list in the extranet, the
                    platform you’ll use to manage your property
                  </Text>
                </Column>
              </Column>
            </Row>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[39%]" />
            <Row className="font-ptsans items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
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

export default PropertySetupAmenitiesPage;
