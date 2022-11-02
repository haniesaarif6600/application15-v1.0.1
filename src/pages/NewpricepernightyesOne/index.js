import React from "react";

import {
  Column,
  Row,
  List,
  Text,
  Img,
  Button,
  Line,
  Stack,
  Input,
} from "components";
import Header2 from "components/Header/Header2";

const NewpricepernightyesOnePage = () => {
  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] lg:pb-[100px] xl:pb-[125px] 2xl:pb-[141px] 3xl:pb-[169px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header2 className="w-[100%]" />
          <Column className="items-center justify-start mt-[1px] w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] shadow-bs w-[3%]"></div>
              <List
                className="gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                orientation="horizontal"
              >
                <Row className="listnameandlocati">
                  <Text className="rownameandlocati" variant="body4">
                    Name and location
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified"
                    alt="TikTokVerified"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowpropertysetup" variant="body4">
                    Property Setup
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_One"
                    alt="TikTokVerified One"
                  />
                </Row>
                <Row className="listnameandlocati">
                  <Text className="rowphotos" variant="body4">
                    Photos
                  </Text>
                  <Img
                    src="images/img_tiktokverified.png"
                    className="TikTokVerified_Two"
                    alt="TikTokVerified Two"
                  />
                </Row>
              </List>
              <Column className="bg-gray_50 items-center py-[1px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                  <Text className="Firstlastname" variant="body4">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-gray_501 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-gray_501 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                  </Row>
                </Column>
              </Column>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                size="xl"
              >
                Review and complete
              </Button>
              <div className="bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[87%]">
              <Column className="justify-start w-[76%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start w-[63%]">
                    <Text className="pricepernight" as="h6" variant="h6">
                      Price per night
                    </Text>
                    <Column className="bg-white_A700 items-end justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] p-[1px] w-[100%]">
                      <Column className="justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]">
                        <Text className="columndescription_two" variant="body3">
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            Properties that received bookings over the last year
                            and share similar features such as location,
                            facilities, and amenities to yours have usually had
                            pricing that falls between
                          </span>
                          <span className="text-black_900 font-ptsans font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            {" "}
                            MYR 89.02 - MYR 146.14
                          </span>
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            , with a median price of{" "}
                          </span>
                          <span className="text-black_900 font-ptsans font-bold lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            MYR 106.12
                          </span>
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            .{" "}
                          </span>
                        </Text>
                        <Line className="bg-bluegray_100 h-[1px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]" />
                        <Row className="items-center lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[61%]">
                          <Text className="Firstlastname" variant="body3">
                            Did this help you decide on a price?
                          </Text>
                          <Img
                            src="images/img_thumbsup_30X30.png"
                            className="ThumbsUp"
                            alt="ThumbsUp"
                          />
                          <Img
                            src="images/img_thumbsdown.png"
                            className="ThumbsDown"
                            alt="ThumbsDown"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Stack className="bg-white_A700 lg:h-[152px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[256px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[30%]">
                    <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[13%] w-[84%]">
                      <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[78%]">
                        <Img
                          src="images/img_idea.png"
                          className="Idea"
                          alt="Idea"
                        />
                        <Text className="rowidea" variant="body3">
                          {`What if I'm not sure `}
                          <br />
                          about my price?
                        </Text>
                      </Row>
                      <Text className="columnidea" variant="body5">
                        Don't worry, you can always change it later. You can
                        even set weekend, midweek and seasonal prices, giving
                        you more control over what you earn.
                      </Text>
                    </Column>
                    <Column className="absolute bg-white_A700 items-center justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                      <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]">
                        <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[78%]">
                          <Img
                            src="images/img_idea.png"
                            className="Idea"
                            alt="Idea One"
                          />
                          <Text className="rowidea" variant="body3">
                            {`What if I'm not sure `}
                            <br />
                            about my price?
                          </Text>
                        </Row>
                        <Text className="columnidea" variant="body5">
                          Don't worry, you can always change it later. You can
                          even set weekend, midweek and seasonal prices, giving
                          you more control over what you earn.
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                </Row>
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[63%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
                      <Column className="justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[98%]">
                        <Column className="justify-start ml-[3px] w-[96%]">
                          <Text
                            className="font-bold text-black_900 w-[auto]"
                            variant="body3"
                          >
                            How much do you want to charge per night?
                          </Text>
                          <Text className="Priceguestspa" variant="body5">
                            Price guests pay
                          </Text>
                          <Input
                            className="placeholder:text-gray_801 price"
                            wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[5px] w-[100%] xl:mt-[7px]"
                            name="price"
                            placeholder="MYR"
                            size="md"
                          ></Input>
                          <Text className="Includingtaxes" variant="body4">
                            Including taxes, commission and charges
                          </Text>
                        </Column>
                        <Line className="bg-bluegray_100 h-[1px] ml-[3px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[99%]" />
                        <Stack className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[36%]">
                          <Column className="absolute bg-green_50 bottom-[0] items-end justify-end p-[1px] w-[100%]">
                            <Text
                              className="columnhighimpacton"
                              variant="body5"
                            >
                              High impact on bookings
                              <br />
                            </Text>
                          </Column>
                          <Img
                            src="images/img_combochart.png"
                            className="ComboChart"
                            alt="ComboChart"
                          />
                        </Stack>
                        <Text
                          className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-black_900 w-[auto]"
                          variant="body2"
                        >
                          Do you want to lower your price by 20% for your first
                          guests?
                        </Text>
                        <Text
                          className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-green_900 w-[auto]"
                          variant="body5"
                        >
                          You’re more likely to get your first bookings and
                          reviews faster with a 20% discount than with none
                        </Text>
                        <Row className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[21%]">
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] w-[46%]">
                            <Img
                              src="images/img_record.png"
                              className="absolute lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] left-[0] w-[64%]"
                              alt="Record"
                            />
                            <Text className="language" variant="body5">
                              Yes{" "}
                            </Text>
                          </Stack>
                          <Stack className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[44%]">
                            <Img
                              src="images/img_round.png"
                              className="absolute lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] left-[0] w-[67%]"
                              alt="Round"
                            />
                            <Text className="language" variant="body5">
                              No
                            </Text>
                          </Stack>
                        </Row>
                        <Column className="bg-green_50 border border-green_900 border-solid justify-start 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] p-[3px] w-[96%]">
                          <Column className="justify-start lg:mb-[11px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[89%]">
                            <Row className="items-start w-[57%]">
                              <Img
                                src="images/img_ok.png"
                                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[17%]"
                                alt="Ok"
                              />
                              <Text className="rowok" variant="body2">
                                Price lowered to MYR 72.00
                              </Text>
                            </Row>
                            <Text className="columnok" variant="body2">
                              If you want to change this price later, you can do
                              so in the extranet.
                              <br />
                              <br />
                              <br />
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 justify-end lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]">
                      <Stack className="font-ptsans 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
                        <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] w-[100%]">
                          <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] w-[100%]">
                            <Text className="description_Six" variant="body3">
                              <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                                15.00% Halalholiday.com commission
                                <br />
                                <br />
                                <br />
                                <br />{" "}
                              </span>
                              <span className="text-gray_801 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                                24/7 help in your language
                                <br />
                                <br /> Save time with automatically confirmed
                                bookings
                                <br />
                                <br /> We promote your place on Google
                              </span>
                            </Text>
                            <Img
                              src="images/img_done.png"
                              className="absolute lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[6%] top-[33%] w-[7%]"
                              alt="Done"
                            />
                          </Stack>
                          <Img
                            src="images/img_done.png"
                            className="absolute bottom-[20%] lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[6%] w-[7%]"
                            alt="Done One"
                          />
                        </Stack>
                        <Img
                          src="images/img_done.png"
                          className="absolute bottom-[1%] lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[6%] w-[7%]"
                          alt="Done Two"
                        />
                      </Stack>
                      <Line className="bg-bluegray_100 h-[1px] lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[88%]" />
                      <Text className="columndescription_six" variant="body3">
                        <span className="text-gray_801 font-ptsans font-normal not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                          MYR 76.50
                        </span>
                        <span className="text-black_900 font-ptsans font-normal not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                          {" "}
                          Your earnings (including taxes)
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[63%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]">
                      <Stack className="bg-white_A700 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]">
                        <Img
                          src="images/img_expandarrow_20X20.png"
                          className="ExpandArrow_Two"
                          alt="ExpandArrow Two"
                        />
                      </Stack>
                      <Button
                        className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                        shape="RoundedBorder3"
                        variant="FillLightblue800"
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Stack className="bg-blue_50 lg:h-[136px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[152px] xl:mt-[191px] 2xl:mt-[215px] 3xl:mt-[258px] shadow-bs w-[23%]">
                <Column className="absolute justify-start right-[1%] top-[3%] w-[94%]">
                  <Row className="items-start justify-between ml-[4px] w-[99%]">
                    <Text className="rowdescription_seven" variant="body6">
                      Is there anything preventing you from <br />
                      completing your registration at this <br />
                      point?
                    </Text>
                    <Img
                      src="images/img_multiply.png"
                      className="Multiply"
                      alt="Multiply"
                    />
                  </Row>
                  <Column className="bg-white_A700 items-center justify-end lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] outline outline-[1px] outline-light_blue_500 lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] shadow-bs w-[42%]">
                    <Text className="columnletusknow" variant="body4">
                      Let us know
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-blue_50 items-end justify-start p-[3px] shadow-bs w-[100%]">
                  <Column className="justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] mt-[2px] w-[95%]">
                    <Row className="items-start justify-between ml-[4px] w-[99%]">
                      <Text className="rowdescription_seven" variant="body6">
                        Is there anything preventing you from <br />
                        completing your registration at this <br />
                        point?
                      </Text>
                      <Img
                        src="images/img_multiply.png"
                        className="Multiply"
                        alt="Multiply One"
                      />
                    </Row>
                    <Button
                      className="font-bold lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[42%]"
                      variant="OutlineLightblue500"
                    >
                      Let us know
                    </Button>
                  </Column>
                </Column>
              </Stack>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NewpricepernightyesOnePage;
