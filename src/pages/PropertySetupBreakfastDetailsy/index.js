import React from "react";

import { Column, Row, Text, Img, Button, Line, Stack } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const PropertySetupBreakfastDetailsyPage = () => {
  const navigate = useNavigate();

  function handleNavigate19() {
    navigate("/parking");
  }
  function handleNavigate20() {
    navigate("/propertysetupbreakfastdetailsn");
  }

  return (
    <>
      <Column className="bg-gray_100 font-ptsans items-center justify-start mx-[auto] xl:pb-[111px] 2xl:pb-[125px] 3xl:pb-[150px] lg:pb-[88px] w-[100%]">
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
                    <div className="bg-blue_300 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] shadow-bs3 w-[13%]"></div>
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
            <Text className="columnrectangleeight" variant="body1">
              Breakfast details
            </Text>
            <Column className="items-center justify-start xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[39%]">
              <Column className="bg-white_A700 justify-end lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] shadow-bs4 w-[100%]">
                <Column className="justify-start ml-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[35%]">
                  <Text
                    className="font-bold text-black_900 w-[auto]"
                    variant="body2"
                  >
                    Do you serve breakfast?
                  </Text>
                  <Img
                    src="images/img_radio.png"
                    className="Radio"
                    alt="Radio"
                  />
                  <Img
                    src="images/img_no.png"
                    className="common-pointer No"
                    onClick={handleNavigate20}
                    alt="No"
                  />
                </Column>
                <Text
                  className="font-bold ml-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] text-black_900 w-[auto]"
                  variant="body2"
                >
                  Is breakfast included in the price guests pay?
                </Text>
                <Img
                  src="images/img_radio_22X152.png"
                  className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[29%]"
                  alt="Radio One"
                />
                <Img
                  src="images/img_radio_22X151.png"
                  className="lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[1px] w-[29%]"
                  alt="Radio Two"
                />
                <Line className="bg-gray_700_33 h-[1.5px] ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]" />
                <Column className="justify-start ml-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[55%]">
                  <Text className="Whattypeofbr" variant="body2">
                    What type of breakfasts do you offer?
                  </Text>
                  <Text className="Selectallthat" variant="body6">
                    Select all that apply
                  </Text>
                </Column>
                <Row className="items-center ml-[1px] mr-[auto] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[87%]">
                  <Button
                    className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    A la carte
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    American
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Asian
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Breakfast to go
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Buffet
                  </Button>
                </Row>
                <Row className="items-center ml-[1px] mr-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[93%]">
                  <Button
                    className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Continental
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[26%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Full English/Irish
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[12%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Halal
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[13%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Italian
                  </Button>
                  <Button
                    className="font-bold xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[19%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Gluten-free
                  </Button>
                </Row>
                <Row className="items-center ml-[1px] mr-[auto] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[52%]">
                  <Button
                    className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Kosher
                  </Button>
                  <Button
                    className="font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Vegan
                  </Button>
                  <Button
                    className="font-bold lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[31%]"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray502"
                  >
                    Vegetarian
                  </Button>
                </Row>
              </Column>
            </Column>
            <Line className="bg-gray_700_33 h-[0.5px] xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[39%]" />
            <Row className="items-center xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
              <Stack className="bg-white_A700 lg:h-[40px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] outline outline-[1px] outline-light_blue_800 lg:px-[14px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[14%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="arrowleft1"
                  alt="arrowleft"
                />
              </Stack>
              <Button
                className="common-pointer font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center text-white_A700 w-[85%]"
                onClick={handleNavigate19}
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

export default PropertySetupBreakfastDetailsyPage;
