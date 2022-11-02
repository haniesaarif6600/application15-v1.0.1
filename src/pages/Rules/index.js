import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  Stack,
  Line,
  Switch,
  List,
  SelectBox,
} from "components";
import Header from "components/Header/Header";

const RulesPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] lg:pb-[50px] xl:pb-[63px] 2xl:pb-[71px] 3xl:pb-[85px] w-[100%]">
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
                <Column className="items-center justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[99%]">
                  <Text className="Firstlastname" variant="body4">
                    Property Setup
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                    <div className="bg-green_201 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
                    <div className="bg-light_blue_800 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
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
              className="xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[90px] Step3"
              as="h5"
              variant="h5"
            >
              House rules
            </Text>
            <Row className="items-start xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[66%]">
              <Stack className="lg:h-[409px] xl:h-[511px] 2xl:h-[575px] 3xl:h-[690px] w-[60%]">
                <Line className="absolute bg-gray_200_ce h-[1px] inset-x-[0] mx-[auto] top-[36%] w-[95%]" />
                <Column className="absolute bg-white_A700 border border-gray_300 border-solid justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                  <Row className="items-start xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[95%]">
                    <Text className="Smoking" variant="body2">
                      Smoking allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[2px] lg:ml-[236px] xl:ml-[295px] 2xl:ml-[332px] 3xl:ml-[398px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[95%]">
                    <Text className="Pets" variant="body2">
                      Pets allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[260px] xl:ml-[326px] 2xl:ml-[367px] 3xl:ml-[440px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                    <Text className="Pets" variant="body2">
                      Children allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[237px] xl:ml-[297px] 2xl:ml-[334px] 3xl:ml-[401px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                    <Text className="Smoking" variant="body2">
                      Parties/events allowed
                    </Text>
                    <Switch
                      value={false}
                      className="mb-[1px] lg:ml-[206px] xl:ml-[257px] 2xl:ml-[290px] 3xl:ml-[348px] rotate-[180deg] w-[7%]"
                    />
                  </Row>
                  <List
                    className="gap-[0] xl:mb-[110px] 2xl:mb-[124px] 3xl:mb-[148px] lg:mb-[88px] min-h-[auto] lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="items-center justify-start lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Check in
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                          <Text className="Pets" variant="body6">
                            From
                          </Text>
                          <Text
                            className="mb-[1px] lg:ml-[174px] xl:ml-[217px] 2xl:ml-[245px] 3xl:ml-[294px] Firstlastname"
                            variant="body6"
                          >
                            Until
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[20px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-bold text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Check out
                        </Text>
                        <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[59%]">
                          <Text className="Pets" variant="body6">
                            From
                          </Text>
                          <Text
                            className="mb-[1px] lg:ml-[174px] xl:ml-[217px] 2xl:ml-[245px] 3xl:ml-[294px] Firstlastname"
                            variant="body6"
                          >
                            Until
                          </Text>
                        </Row>
                        <Row className="items-center justify-between lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                          <SelectBox
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900 w-[47%]"
                            placeholderClassName="text-black_900"
                            name="time One One"
                            placeholder="15:00"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_5X9.svg"
                                className="lg:w-[6px] lg:h-[4px] lg:mr-[6px] xl:w-[8px] xl:h-[5px] xl:mr-[8px] 2xl:w-[9px] 2xl:h-[6px] 2xl:mr-[9px] 3xl:w-[10px] 3xl:h-[7px] 3xl:mr-[10px]"
                                alt="arrow_down"
                              />
                            }
                            shape="RoundedBorder2"
                          ></SelectBox>
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Stack>
              <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[38%]">
                <Column className="justify-start lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mt-[1px] w-[97%]">
                  <Row className="items-start w-[100%]">
                    <Img
                      src="images/img_lightbulb_29X29.svg"
                      className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] mdihomegroup"
                      alt="lightbulb"
                    />
                    <Text
                      className="font-bold leading-[normal] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_900 w-[43%]"
                      variant="body1"
                    >
                      What if my rules change?
                    </Text>
                    <Img
                      src="images/img_close_29X29.svg"
                      className="2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] mdihomegroup"
                      alt="close"
                    />
                  </Row>
                  <Text
                    className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-gray_702 w-[80%]"
                    variant="body4"
                  >
                    You can easily customise these house rules later and
                    additional house rules can be set on the Policies page of
                    the extranet after you complete registeration.
                  </Text>
                </Column>
              </Column>
            </Row>
            <Line className="bg-gray_200_ce h-[1px] lg:ml-[103px] xl:ml-[129px] 2xl:ml-[146px] 3xl:ml-[175px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[37%]" />
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
      </Column>
    </>
  );
};

export default RulesPage;
