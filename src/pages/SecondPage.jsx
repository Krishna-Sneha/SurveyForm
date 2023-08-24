import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";

import "../App.css";

import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const SecondPage = ({ user, setUser }) => {
  const Navigate = useNavigate();

  const [ageGroup, setAgeGroup] = useState("");
  const [higherStudies, setHigherStudies] = useState("");
  const [shareForward, setShareForward] = useState("");
  const [rateProduct, setRateProduct] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    user.ageGroup = ageGroup;
    user.higherStudies = higherStudies;
    user.shareForward = shareForward;
    user.rateProduct = rateProduct;
    user.feedback = feedback;

    setUser(user);

    //send mail
    var templateParams = {
      name: user.name,
      email: user.email,
      collegeName: user.collegeName,
      ageGroup: user.ageGroup,
      higherStudies: user.higherStudies,
      shareForward: user.shareForward,
      rateProduct: user.rateProduct,
      feedback: user.feedback,
    };

    emailjs
      .send(
        "service_grozo64",
        "template_6nk3cnt",
        templateParams,
        "TVpF_nkvpxdowt7aq"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    if (ageGroup && higherStudies && shareForward && rateProduct && feedback)
      Navigate("/thanks");
    else alert("Please fill all the required details!");
  };

  return (
    <Box className="background">
      <FormControl isRequired>
        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>Your age group</FormLabel>
          <Select
            name="ageGroup"
            placeholder="Select option"
            onChange={(e) => {
              setAgeGroup(e.target.value);
            }}
          >
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-40">35-40</option>
            <option value="40+">40+</option>
          </Select>
        </div>

        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>
            Are you planning for higher studies
          </FormLabel>
          <RadioGroup
            name="higherStudies"
            onChange={(e) => {
              setHigherStudies(e);
            }}
          >
            <Stack direction={{ sm: "column", md: "row" }}>
              <Radio value="Not planned">Not planned</Radio>
              <Radio value="Definitely yes">Definitely yes</Radio>
              <Radio value="May be later after 2 to 3 years">
                May be later after 2 to 3 years
              </Radio>
              <Radio value="No, will pursue job only">
                No, will pursue job only
              </Radio>
            </Stack>
          </RadioGroup>
        </div>

        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>
            Would you share this to your friends?
          </FormLabel>
          <RadioGroup
            name="shareForward"
            onChange={(e) => {
              setShareForward(e);
            }}
          >
            <Stack direction={{ sm: "column", md: "row" }}>
              <Radio value="Not at all">Not at all</Radio>
              <Radio value="May be">May be</Radio>
              <Radio value="Definitely">Definitely</Radio>
            </Stack>
          </RadioGroup>
        </div>

        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>
            How would you rate your experience with our product?
          </FormLabel>
          <RadioGroup
            name="rateProduct"
            onChange={(e) => {
              setRateProduct(e);
            }}
          >
            <Stack direction={{ sm: "column", md: "row" }}>
              <Radio value="Very satisfied">Very satisfied</Radio>
              <Radio value="Satisfied">Satisfied</Radio>
              <Radio value="Neither agree nor disagree">
                Neither agree nor disagree
              </Radio>
              <Radio value="Dissatisfied">Dissatisfied</Radio>
              <Radio value="Very dissatisfied">Very dissatisfied</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>Your feedback</FormLabel>
          <Input
            name="feedback"
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
            }}
            placeholder="Your feedback..."
          />
        </div>

        <Button
          sx={{ display: "block", marginX: "auto", marginTop: "30px" }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </FormControl>
    </Box>
  );
};

export default SecondPage;
