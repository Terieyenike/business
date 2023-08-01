import React, { createRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { databases, DATABASE_ID, COLLECTION_ID } from "appwriteConfig";
import { ID } from "appwrite";

import { Button, Img, Input, Line, Text, TextArea } from "components";
import Footer1 from "components/Footer1";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href = "www.nexus.com";
  }

  const inputRef = createRef();
  const textAreaRef = createRef();
  const emailRef = createRef();

  async function handleFormSubmit() {
    if (
      !inputRef.current.value ||
      !emailRef.current.value ||
      !textAreaRef.current.value
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    let payload = {
      name: inputRef.current.value,
      email: emailRef.current.value,
      message: textAreaRef.current.value,
    };
    await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      payload
    );
    inputRef.current.value = "";
    emailRef.current.value = "";
    textAreaRef.current.value = "";

    setIsSubmitted(true);
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between mx-auto my-[15px] w-[78%]">
              <div className="header-row ">
                <Img
                  className="h-[50px]"
                  src="images/img_group642.svg"
                  alt="Group645"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-between pr-[7px] pt-[7px] w-[39%]">
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/about")}
                >
                  About
                </Text>
                <Text
                  className="common-pointer text-black-900 text-lg"
                  size="txtSourceSansProBold18Black900"
                  onClick={() => navigate("/works")}
                >
                  Works
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start mr-2.5">
                  <Text
                    className="text-lg text-red-401"
                    size="txtSourceSansProBold18"
                  >
                    Contact
                  </Text>
                  <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-start justify-start md:px-5 w-[92%] md:w-full">
          <div className="bg-blue-50 flex flex-col items-center justify-start md:ml-[0] ml-[121px] p-[51px] md:px-10 sm:px-5 rounded-[90px] w-[91%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[76px] h-[381px] items-center justify-end mb-[91px] mt-[72px] p-[72px] md:px-10 sm:px-5"
              style={{ backgroundImage: "url('images/img_group744.svg')" }}
            >
              <Text
                className="mt-1 sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtSourceSansProBold50"
              >
                <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  Get in{" "}
                </span>
                <span className="text-red-401 font-sourcesanspro text-left font-bold">
                  touch
                </span>
              </Text>
              <Text
                className="leading-[40.00px] text-center text-gray-700 text-xl w-[86%] sm:w-full"
                size="txtSourceSansProRegular20Gray700"
              >
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below.
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-end md:ml-[0] ml-[120px] mt-[100px] w-[91%] md:w-full">
            {isSubmitted ? (
              <div className="flex flex-col items-center w-full">
                <p className="font-bold text-2xl">
                  Thank you! Your message has been received!
                </p>
              </div>
            ) : (
              <div className="bg-white-A700 md:h-[425px] sm:h-[538px] h-[599px] md:mt-0 mt-[15px] p-[70px] md:px-10 sm:px-5 relative rounded-[20px] shadow-bs5 w-[66%] md:w-full">
                <div className="absolute flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto pb-[72px] rounded-[5px] top-[12%] w-3/4">
                  <Input
                    name="Group843"
                    placeholder="Send Message"
                    className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-xl w-full"
                    wrapClassName="border-b border-gray-200 pb-[18px] pr-[35px] w-full"
                  ></Input>
                  <div className="flex flex-col items-center justify-start rounded-[5px] w-full">
                    <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Input
                          ref={inputRef}
                          name="Group750"
                          placeholder="Your Name"
                          className="font-bold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-base text-gray-400 text-left w-full"
                          wrapClassName="bg-gray-100 sm:flex-1 pl-[19px] pr-[35px] py-8 rounded-[5px] sm:w-full"
                          type="text"
                        ></Input>
                        <Input
                          ref={emailRef}
                          name="Group751"
                          placeholder="Your Email"
                          className="font-bold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-base text-gray-400 text-left w-full"
                          wrapClassName="bg-gray-100 sm:flex-1 pl-[19px] pr-[35px] py-[31px] rounded-[5px] sm:w-full"
                          type="email"
                        ></Input>
                      </div>
                      <TextArea
                        className="bg-gray-100 font-bold leading-[normal] pb-[35px] pl-[19px] sm:pr-5 pr-[35px] pt-6 rounded-[5px] text-base placeholder:text-gray-400 text-gray-400 text-left w-full"
                        name="Group748"
                        ref={textAreaRef}
                        placeholder="Your Message"
                      ></TextArea>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-48 text-red-401 font-semibold">
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
                <Button
                  className="absolute bg-green-600 bottom-[17%] cursor-pointer leading-[normal] left-[14%] min-w-[182px] py-3 rounded-[25px] shadow-bs6 text-center text-white-A700 text-xl"
                  onClick={handleFormSubmit}
                >
                  Send
                </Button>
              </div>
            )}

            <div className="bg-white-A700 flex flex-col items-start justify-center mb-3 p-[33px] sm:px-5 rounded-[20px] shadow-bs5 w-[32%] md:w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start mb-9 mt-11 w-[90%] md:w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-[98%] md:w-full">
                  <Input
                    name="Group762"
                    placeholder="Contact Information"
                    className="font-bold leading-[normal] p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-xl w-full"
                    wrapClassName="border-b border-gray-200 pb-[26px] pr-[35px] w-full"
                  ></Input>
                  <div className="flex flex-col gap-[29px] items-start justify-start ml-1 md:ml-[0] w-[92%] md:w-full">
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[74%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_frame666.svg"
                        alt="Frame666"
                      />
                      <Text
                        className="text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        hello@nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[70%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_globe.svg"
                        alt="globe"
                      />
                      <Text
                        className="common-pointer mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                        onClick={handleNavigate}
                      >
                        www.nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                      <Img
                        className="h-6 mt-[3px] w-6"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:flex-1 text-[17px] text-gray-401 w-4/5 sm:w-full"
                        size="txtSourceSansProSemiBold17"
                      >
                        Sudirman street, holgan, melbourne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[25px] items-start justify-start w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_call.svg"
                        alt="call"
                      />
                      <Text
                        className="mt-1 text-[17px] text-gray-401"
                        size="txtSourceSansProSemiBold17"
                      >
                        0361 - 8878
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start mr-2 w-[98%] md:w-full">
                    <Text
                      className="text-gray-600 text-xl"
                      size="txtSourceSansProBold20Gray600"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray-200 h-px w-full" />
                  </div>
                  <div className="flex flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[31px] w-[89%] md:w-full">
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group270.png"
                      alt="Group270"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group271.png"
                      alt="Group271"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group268.png"
                      alt="Group268"
                    />
                    <Img
                      className="h-[47px] md:h-auto object-cover w-[47px]"
                      src="images/img_group269.png"
                      alt="Group269"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray-801 flex items-center justify-center mt-[108px] rounded-tr-[50px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
