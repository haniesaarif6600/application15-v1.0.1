import React from "react";

import {
  Column,
  Stack,
  Row,
  Text,
  Img,
  List,
  Button,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const NewpricepernightnoPage = () => {
  const navigate = useNavigate();

  function handleNavigate44() {
    navigate("/newpricepernightyes");
  }
  //back button
  function handleNavigate45() {
    navigate("/pricingandcalendarno");
  }
  //continue button
  function handleNavigate46() {
    navigate("/pricingandcalendarrateplans");
  }

  return (
    <>
      <Column className="bg-gray_50 font-ptsans lg:h-[1024px] xl:h-[1281px] 2xl:h-[1441px] 3xl:h-[1729px] items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start mt-[1px] w-[100%]">
            <Stack className="3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] w-[100%]">
              <Row className="absolute bg-gray_50 items-center justify-center left-[3%] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] shadow-bs w-[19%]">
                <Text className="rownameandlocati" variant="body4">
                  Name and location
                </Text>
                <Img
                  src="images/img_tiktokverified.png"
                  className="TikTokVerified"
                  alt="TikTokVerified"
                />
              </Row>
              <div className="absolute bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] left-[0] shadow-bs w-[3%]"></div>
              <div className="absolute bg-gray_50 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] right-[0] shadow-bs w-[3%]"></div>
              <Row className="absolute bg-gray_50 items-center justify-center left-[22%] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] shadow-bs w-[19%]">
                <Text className="rowpropertysetup" variant="body4">
                  Property Setup
                </Text>
                <Img
                  src="images/img_tiktokverified.png"
                  className="TikTokVerified_One"
                  alt="TikTokVerified One"
                />
              </Row>
              <Row className="absolute bg-gray_50 inset-x-[40%] items-center justify-center lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] shadow-bs w-[19%]">
                <Text className="rowphotos" variant="body4">
                  Photos
                </Text>
                <Img
                  src="images/img_tiktokverified.png"
                  className="TikTokVerified_Two"
                  alt="TikTokVerified Two"
                />
              </Row>
              <Column className="absolute bg-gray_50 items-center justify-end py-[1px] right-[22%] shadow-bs w-[19%]">
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
              <Column className="absolute bg-gray_50 items-center justify-end lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] right-[3%] shadow-bs w-[19%]">
                <Text className="columnreviewandcomp" variant="body4">
                  Review and complete
                </Text>
              </Column>
              <Row className="absolute items-center justify-evenly w-[100%]">
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
                      alt="TikTokVerified Three"
                    />
                  </Row>
                  <Row className="listnameandlocati">
                    <Text className="rowpropertysetup" variant="body4">
                      Property Setup
                    </Text>
                    <Img
                      src="images/img_tiktokverified.png"
                      className="TikTokVerified_One"
                      alt="TikTokVerified Four"
                    />
                  </Row>
                  <Row className="listnameandlocati">
                    <Text className="rowphotos" variant="body4">
                      Photos
                    </Text>
                    <Img
                      src="images/img_tiktokverified.png"
                      className="TikTokVerified_Two"
                      alt="TikTokVerified Five"
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
            </Stack>
            <Row className="items-start lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]">
              <Column className="justify-start w-[76%]">
                <Row className="items-end justify-between w-[100%]">
                  <Column className="justify-start w-[64%]">
                    <Text className="Firstlastname" as="h6" variant="h6">
                      Price per night
                    </Text>
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[100%]">
                      <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[99%]">
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
                  <Stack className="bg-white_A700 lg:h-[152px] xl:h-[190px] 2xl:h-[214px] 3xl:h-[256px] lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[31%]">
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
                
                <Column className="bg-white_A700 items-center justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[63%]">
                  <Column className="justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[94%]">
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
                  <Column className="items-center justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[98%]">
                    <Column className="justify-start w-[100%]">
                      <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[99%]">
                        <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                        <Stack className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] ml-[1px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[37%]">
                          <Column className="absolute bg-green_50 bottom-[0] items-end justify-end p-[1px] w-[100%]">
                            <Text
                            className="columnhighimpacton1"
                              
                              variant="body5"
                            >
                              High impact on bookings
                            </Text>
                          </Column>
                          <Img
                            src="images/img_combochart.png"
                            className="ComboChart"
                            alt="ComboChart"
                          />
                        </Stack>
                      </Column>
                      <Text className="Doyouwantto2" variant="body2">
                        Do you want to lower your price by 20% for your first
                        guests?
                      </Text>
                      <Text className="offer1" variant="body5">
                        You’re more likely to get your first bookings and
                        reviews faster with a 20% discount than with none
                      </Text>
                      <Row className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[21%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer Round4"
                          alt="Round"
                          onClick={handleNavigate44}
                        />
                        <Text className="Firstlastname" variant="body5">
                          Yes{" "}
                        </Text>
                        <Img
                          src="images/img_record.png"
                          className="common-pointer Round_One1"
                          alt="Record"
                        />
                        <Text className="Firstlastname" variant="body5">
                          No
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 justify-end lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[63%]">
                  <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[78%]">
                    <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] top-[0] w-[100%]">
                      <Stack className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] w-[100%]">
                        <Text className="description_Six" variant="body3">
                          <span className="text-black_900 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            15.00% Halalholiday.com commission
                            <br />
                            <br />{" "}
                          </span>
                          <span className="text-gray_801 font-ptsans lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px]">
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 24/7 help in your language
                            <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Save time with automatically confirmed
                            bookings
                            <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We promote your place on Google
                          </span>
                        </Text>
                        <Img
                          src="images/img_done.png"
                          className="absolute lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-y-[0] left-[6%] my-[auto] w-[7%]"
                          alt="Done"
                        />
                      </Stack>
                      <Img
                        src="images/img_done.png"
                        className="absolute bottom-[17%] lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[6%] w-[7%]"
                        alt="Done One"
                      />
                    </Stack>
                    <Img
                      src="images/img_done.png"
                      className="absolute bottom-[0] lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[6%] w-[7%]"
                      alt="Done Two"
                    />
                  </Stack>
                  <Line className="bg-bluegray_100 h-[1px] lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[89%]" />
                  <Text className="test_15booking" variant="body3">
                    MYR 76.50 Your earnings (including taxes)
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[63%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[99%]">
                      <Stack className="bg-white_A700 hover:bg-gray_50 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]"
                      onClick={handleNavigate45}
                      >
                        <Img
                          src="images/img_expandarrow_20X20.png"
                          className="common-pointer ExpandArrow_Two"
                          alt="ExpandArrow Two"
                        />
                      </Stack>
                      <Button
                        className="font-bold hover:bg-sky-900 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                        shape="RoundedBorder3"
                        variant="FillLightblue800"
                        onClick={handleNavigate46}
                      >
                        Continue
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Stack className="bg-blue_50 lg:h-[136px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[166px] xl:mt-[208px] 2xl:mt-[234px] 3xl:mt-[280px] shadow-bs w-[24%]">
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
                
              </Stack>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default NewpricepernightnoPage;
