import React from "react";

import { Column, Row, List, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PricingandcalendarYesIllconnectwithachannelmanagerPage = () => {
  const navigate = useNavigate();

  function handleNavigate39() {
    navigate("/pricingandcalendarnoiwontsyncmyavailability");
  }
  function handleNavigate40() {
    navigate(
      "/pricingandcalendaryesillimportunavailabledatesfromanotherwebsite"
    );

  }
  function handleNavigate109() {
    navigate(
      "/PricingandcalendarRateplans"
    );

  }


  return (
    <>
      <Column className="bg-gray_50 font-ptsans items-center justify-start mx-[auto] 2xl:pb-[112px] 3xl:pb-[134px] lg:pb-[79px] xl:pb-[99px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center justify-evenly w-[100%]">
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
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
              <Column className="bg-gray_50 items-center pl-[1px] py-[1px] shadow-bs w-[19%]">
                <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[99%]">
                  <Text className="Firstlastname" variant="body4">
                    Pricing and calendar
                  </Text>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-green_200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
                    <div className="bg-blue_A200 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[18%]"></div>
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
              <div className="bg-gray_50 3xl:h-[103px] lg:h-[61px] xl:h-[76px] 2xl:h-[86px] shadow-bs w-[3%]"></div>
            </Row>
            <Row className="items-start lg:mt-[51px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] w-[87%]">
              <Column className="items-center justify-start w-[68%]">
                <Column className="justify-start w-[99%]">
                  <Text className="availability" as="h6" variant="h6">
                    Availability
                  </Text>
                  <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[19px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] w-[100%]">
                    <Column className="justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] ml-[1px] w-[50%]">
                      <Text
                        className="font-bold text-black_900 w-[auto]"
                        variant="body1"
                      >
                        When is the first date that guests can check in?
                      </Text>
                      <Row className="items-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[87%]">
                        <Img
                          src="images/img_record.png"
                          className="Record1"
                          alt="Record"
                        />
                        <Text className="Assoonasposs" variant="body5">
                          As soon as possible
                        </Text>
                        <Img
                          src="images/img_round.png"
                          className="Round1"
                          alt="Round"
                        />
                        <Text className="Assoonasposs" variant="body5">
                          On a specific date
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
                  <Column className="bg-white_A700 justify-start lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
                    <Column className="justify-start lg:mb-[12px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[95%]">
                      <Text
                        className="font-normal leading-[normal] not-italic text-black_900 w-[90%]"
                        variant="body3"
                      >
                        To help you start earning, we automatically make your
                        property available for bookings for up to 18 months ???
                        excluding days you import that are marked as
                        unavailable. You can manage your availability and make
                        dates unavailable for bookings after registration.
                      </Text>
                      <Text className="Doyouwantto1" variant="body1">
                        Do you want to sync your availability with another
                        website?
                      </Text>
                      <Text
                        className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-green_900 w-[84%]"
                        variant="body5"
                      >
                        You will avoid double bookings by syncing calendars. It
                        will also help you get your property listed on
                        HalalHoliday.com and open for bookings 80% faster.
                      </Text>
                      
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[51%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer Round_Two1"
                          onClick={handleNavigate40}
                          alt="Round One"
                        />
                        <Text className="rowround_two1" variant="body5">
                          Yes, I???ll import unavailable dates from another
                          website
                        </Text>
                      </Row>
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[39%]">
                        <Img
                          src="images/img_record.png"
                          className="Round_One"
                          alt="Record Three"
                        />
                        <Text 
                          className="common-ponter font-normal leading-[normal] mb-[3px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-black_900 w-[85%]"
                          variant="body5"
                        >
                          Yes, I???ll connect with a channel manager
                        </Text>
                      </Row>
                      <Row className="bg-green_50 border border-green_900 border-solid items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] pb-[4px] px-[4px] w-[99%]">
                        <Img
                          src="images/img_ok.png"
                          className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] w-[6%]"
                          alt="Ok"
                        />
                        <Text
                          className="font-normal leading-[normal] lg:mb-[10px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-black_900 text-shadow-ts w-[82%]"
                          variant="body5"
                        >
                          <br />
                          {`You'll be able to connect with a channel manager after your registration is complete ??? please continue to the next step.`}
                        </Text>
                      </Row>
                      <Row className="items-end 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[32%]">
                        <Img
                          src="images/img_round.png"
                          className="common-pointer Round_Two"
                          onClick={handleNavigate39}
                          alt="Round Two"
                        />
                        <Text className="rowround_two1" variant="body5">
                          No, I won???t sync my availability
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]" />
                </Column>
                <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[99%]">
                  <Stack className="common-pointer bg-white_A700 hover:bg-gray_50 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] outline outline-[1px] outline-light_blue_500 xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] shadow-bs w-[13%]"
                  onClick={handleNavigate109}
                  >
                    <Img
                      src="images/img_arrowleft_30X31.svg"
                      className="ExpandArrow"
                      alt="ExpandArrow"
                      
                    />
                  </Stack>
                  <Button
                    className="font-bold hover:bg-sky-900 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[84%]"
                    shape="RoundedBorder3"
                    variant="FillLightblue800"
                  >
                    Continue
                  </Button>
                </Row>
              </Column>
              <Column className="justify-start lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[59px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[28%]">
                  <Column className="bg-white_A700 items-center justify-start lg:mr-[34px] xl:mr-[43px] 2xl:mr-[49px] 3xl:mr-[58px] lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[86%]">
                    <Column className="justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[46px] 3xl:mb-[55px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                      <Row className="items-start w-[82%]">
                        <Img
                          src="images/img_idea.png"
                          className="Idea"
                          alt="Idea"
                        />
                        <Text className="rowidea" variant="body3">
                          Not ready to sync your availability right now?
                        </Text>
                      </Row>
                      <Text className="columnidea" variant="body5">
                        That???s okay ??? you can sync your availability with other
                        websites after you finish your registration.
                      </Text>
                    </Column>
                  </Column>
                  <br />
                  <br />
                  <br />
                  <Column className="bg-blue_50 items-end justify-start lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] p-[4px] shadow-bs w-[85%]">
                    <Column className="justify-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] mt-[4px] w-[93%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Text
                          className="font-normal leading-[normal] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-black_900 w-[85%]"
                          variant="body6"
                        >
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
                      <Button
                        className="font-bold lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[43%]"
                        variant="OutlineLightblue500"
                      >
                        Let us know
                      </Button>
                    </Column>
                  </Column>
                </Column>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default PricingandcalendarYesIllconnectwithachannelmanagerPage;
