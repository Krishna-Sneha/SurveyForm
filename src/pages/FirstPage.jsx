import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

import "../App.css";

import { useNavigate } from "react-router-dom";

function FirstPage({ user, setUser }) {
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (user.name && user.email && user.collegeName) navigate("/next");
    else alert("Kindly fill all the details!");
  };

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  return (
    <Box className="background">
      <FormControl isRequired>
        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>Name</FormLabel>
          <Input
            type="text"
            value={user.name}
            name="name"
            onChange={handleInput}
          />
        </div>
        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
          <FormHelperText color="black">
            We'll never share your email.
          </FormHelperText>
        </div>
        <div style={{ marginTop: "5%" }}>
          <FormLabel fontSize={{ sm: 12, md: 18 }}>
            University/College Name
          </FormLabel>
          <Input
            type="text"
            name="collegeName"
            value={user.collegeName}
            onChange={handleInput}
          />
        </div>
        <Button
          sx={{ display: "block", marginX: "auto", marginY: "3px" }}
          onClick={() => handleNextPage()}
        >
          Next...
        </Button>
      </FormControl>
    </Box>
  );
}

export default FirstPage;
