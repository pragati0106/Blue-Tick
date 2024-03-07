import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Heading = styled(Typography)`
  color: #0b67bc;
  font-size: 40px;
  font-weight: 500;
  text-align: left;
  width: 100% @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 23px;
    font-weight: 550;
  }
`;
const Function = styled(Box)`
  overflow: hidden;
  height: inherit;
  cover: content-fit;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  @media (max-width: 600px) {
    width: 80%;
    height: 50%;
    margin:auto;
  }
`;

const Title = styled(Typography)`
  color: #646464;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.2;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;
const Parent = styled(Box)`
  display: flex;
  margin-top: 10px;
  padding: 20px;
  justify-content: space-around;
  border-bottom: 10vh solid #0b67bc;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 13px;
    justify-content: space-between;
    height: auto;
    margin-top: 25px;
  }
`;
const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 95%;
  margin: auto;
  @media (max-width: 600px) {
    line-height: 1.5;
    align-items: center;
  }
`;

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fullName === "") {
      setValue("Full Name");
      handleClickOpen();
      return;
    }
    if (email === "") {
      setValue("Email");
      handleClickOpen();
      return;
    }
    if (contactNumber === "") {
      setValue("Contact Number");
      handleClickOpen();
      return;
    }
    if (subject === "") {
      setValue("Subject");
      handleClickOpen();
      return;
    }
    if (message=== "") {
      setValue("Message");
      handleClickOpen();
      return;
    }
    setFullName("");
    setEmail("");
    setContactNumber("");
  };
  return (
    <Parent id="Contact Us">
      <Content
        width={{ xs: "100%", md: "45%" }}
        height={{ md: "100%" }}
      >
        <Heading variant="h1" component="h2">
          Let's Connect
        </Heading>
        <Title>
          Contact our support team or make an appointment with experts
        </Title>
      </Content>
      <Function sx={{ boxShadow: 3 }} md={{ boxShadow: 3 }}>
          <TextField
            required
            id="filled-required"
            label="Full Name"
            variant="filled"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            required
            variant="filled"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            type="number"
            label="Contact Number"
            onChange={(e) => {
              setContactNumber(e.target.value);
            }}
            value={contactNumber}
            required
            variant="filled"
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            required
            variant="filled"
            value={subject}
          />
           <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="filled"
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
          <div>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </div>
      </Function>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Some data is required"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {value} is required
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Parent>
  );
};
export default Contact;
