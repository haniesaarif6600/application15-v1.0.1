import React from "react";

import { Column, Row, Text, Img, Button, Stack, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const ParkingfreePage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    navigate("/parking");
  }

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
                  <div className="bg-blue_300 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
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
          <Column className="justify-start xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:ml-[93px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] pr-[3px] pt-[3px] w-[40%]">
            <Text className="columntellusaboutt" as="h5" variant="h5">
              Tell us about the parking situation at your apartment
            </Text>
            <Stack className="lg:h-[409px] xl:h-[511px] 2xl:h-[575px] 3xl:h-[690px] ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]">
              <div className="absolute bg-white_A700 border border-gray_300 border-solid lg:h-[411px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] w-[100%]"></div>
              <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[6%] w-[95%]">
                <Column className="items-center justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[43%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Is parking available to guests?
                  </Text>
                </Column>
                <Row className="items-start ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] py-[1px] w-[14%]">
                  <Stack
                    className="bg-cover bg-repeat ml-[1px] my-[1px] px-[4px] refresh"
                    style={{ backgroundImage: "url('images/img_refresh.svg')" }}
                  >
                    <Img
                      src="images/img_close_8X8.svg"
                      className="close2"
                      alt="close"
                    />
                  </Stack>
                  <Text className="iconradio1" variant="body5">
                    Yes, free
                  </Text>
                </Row>
                <Row className="items-start ml-[4px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[15%]">
                  <Img
                    src="images/img_refresh.svg"
                    className="refresh"
                    alt="refresh"
                  />
                  <Text className="iconradio2" variant="body5">
                    Yes, paid
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[8%]"
                  onClick={handleNavigate24}
                >
                  <Img
                    src="images/img_group172.svg"
                    className="refresh"
                    alt="refresh One"
                  />
                  <Text className="iconradio3" variant="body5">
                    No
                  </Text>
                </Row>
                <Line className="bg-gray_200_ce h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                <Column className="items-center justify-start ml-[3px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[57%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Do they need to reserve a parking spot?
                  </Text>
                </Column>
                <Column className="justify-start ml-[4px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] py-[1px] w-[32%]">
                  <Row className="items-center w-[89%]">
                    <Stack
                      className="bg-cover bg-repeat px-[4px] refresh"
                      style={{
                        backgroundImage: "url('images/img_group172.svg')",
                      }}
                    >
                      <Img
                        src="images/img_close_8X8.svg"
                        className="close2"
                        alt="close One"
                      />
                    </Stack>
                    <Text className="columnyesillimpor" variant="body5">
                      Reservation needed
                    </Text>
                  </Row>
                  <Row className="items-start mb-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="refresh"
                      alt="refresh Two"
                    />
                    <Text className="iconradio" variant="body5">
                      No reservation needed
                    </Text>
                  </Row>
                </Column>
                <Column className="items-center justify-start ml-[3px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[37%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Where is parking located?
                  </Text>
                </Column>
                <Column className="items-center justify-start ml-[4px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] py-[1px] w-[13%]">
                  <Row className="items-center w-[99%]">
                    <Stack
                      className="bg-cover bg-repeat px-[4px] refresh"
                      style={{
                        backgroundImage: "url('images/img_group172.svg')",
                      }}
                    >
                      <Img
                        src="images/img_close_8X8.svg"
                        className="close2"
                        alt="close Two"
                      />
                    </Stack>
                    <Text className="columnyesillimpor" variant="body5">
                      On site
                    </Text>
                  </Row>
                  <Row className="items-start mb-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                    <Img
                      src="images/img_refresh.svg"
                      className="refresh"
                      alt="refresh Three"
                    />
                    <Text className="iconradio" variant="body5">
                      Off site
                    </Text>
                  </Row>
                </Column>
                <Column className="justify-start ml-[3px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[37%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body2"
                    >
                      What type of parking is it?
                    </Text>
                  </Column>
                  <Column className="justify-start ml-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] py-[1px] w-[35%]">
                    <Row className="items-center w-[100%]">
                      <Stack
                        className="bg-cover bg-repeat px-[4px] refresh"
                        style={{
                          backgroundImage: "url('images/img_group172.svg')",
                        }}
                      >
                        <Img
                          src="images/img_close_8X8.svg"
                          className="close2"
                          alt="close Three"
                        />
                      </Stack>
                      <Text className="columnyesillimpor" variant="body5">
                        Private
                      </Text>
                    </Row>
                    <Row className="items-start mb-[1px] ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[93%]">
                      <Img
                        src="images/img_refresh.svg"
                        className="refresh"
                        alt="refresh Four"
                      />
                      <Text className="iconradio" variant="body5">
                        Public
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Line className="bg-gray_200_ce h-[1px] lg:ml-[106px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[37%]" />
          <Row className="items-center xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
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

export default ParkingfreePage;
