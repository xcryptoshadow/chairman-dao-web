import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwtEncode from 'jwt-encode';

// chakra ui
import {
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Stack,
  Select,
  Spinner,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from '@chakra-ui/react';

// formik
import { Formik, Form, Field } from 'formik';

const FormDao = () => {
  let { payload } = useParams();

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const decoded = jwtDecode(payload);
  console.log('Decoded: ', decoded);

  const daoName = decoded.daoName + '_DAO';
  const daoImage = decoded.daoImage;
  const userName = decoded.userName;
  const userImage = decoded.userImage;

  const validateUserName = value => {
    let error;
    if (!value) {
      error = 'User Name is required';
    }
    return error;
  };

  const validateTokenSymbol = value => {
    let error;
    if (!value) {
      error = 'Token Symbol is required';
    }
    return error;
  };

  const validateTwitterUsername = value => {
    let error;
    return error;
  };

  const handleSubmit = async (values, actions) => {
    try {
      console.log('Form Values: ', values);
      const secret = 'secret';
      const data = {
        userID: decoded.userID,
        guildID: decoded.guildID,
        channelID: decoded.channelID,
        daoName: daoName,
        tokenSymbol: values.tokenSymbol.toUpperCase(),
        creatorAllocation: values.creatorAllocation,
      };

      console.log('DATA ==> ', data);

      const payload = jwtEncode(data, secret);

      // localhost:3000/v1/dao/createDao/?payload=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI0NjEzNzEyMjg2NjIzOTg5ODYiLCJndWlsZElEIjoiOTUyNzQ3Mzk3NDI2MDY1NDE4IiwiY2hhbm5lbElEIjoiOTUyNzQ3Mzk3NDI2MDY1NDIxIiwiZGFvTmFtZSI6IkF2aSdzIHNlcnZlciBEQU8iLCJ0b2tlblN5bWJvbCI6ImFyayIsImNyZWF0b3JBbGxvY2F0aW9uIjoiMTAifQ.VCj_YuMA0kpeg9D0R6cJZOln6NgYDATvtKYKC7K1Xbw

      const response = await axios.post(
        `http://localhost:3000/v1/dao/createDaoPending/?payload=${payload}`
      );

      setHasSubmitted(true);
      actions.setSubmitting(false);
    } catch (err) {
      console.log('Error: ', err);
      actions.setSubmitting(false);
    }
  };

  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mt={20} mb={10}>
          <Box
            maxW="xl"
            borderWidth="8px"
            borderRadius="20px"
            borderColor="black"
            align="center"
            justify="center"
          >
            <Container p={4}>
              {hasSubmitted ? (
                <Fragment>
                  <Box mb={8}>
                    <Text fontSize="2xl" fontWeight="500">
                      Thanks for the info
                    </Text>
                  </Box>
                  <Box mb={4}>
                    <Button
                      borderRadius="full"
                      bg="black"
                      color="white"
                      w="100%"
                      onClick={() => {
                        window.location.assign('https://discord.com/');
                      }}
                    >
                      Start creating the DAO
                    </Button>
                  </Box>
                </Fragment>
              ) : (
                <Fragment>
                  <Box mb={4}>
                    <Image
                      borderRadius="full"
                      boxSize="100px"
                      src={daoImage}
                      alt="DAO Image"
                      mt={'-80px'}
                    />
                    <Text fontSize="2xl" fontWeight="700">
                      {daoName}
                    </Text>
                  </Box>

                  <Box>
                    <Formik
                      initialValues={{
                        userName: userName,
                        tokenSymbol: '',
                        creatorAllocation: '10',
                        twitterUsername: '',
                      }}
                      onSubmit={(values, actions) => {
                        handleSubmit(values, actions);
                      }}
                    >
                      {props => (
                        <Form>
                          <Flex mb={4}>
                            <Image
                              boxSize="75px"
                              src={userImage}
                              alt="User Image"
                              mr={8}
                              borderRadius="10px"
                            />
                            <Field name="userName" validate={validateUserName}>
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={
                                    form.errors.userName &&
                                    form.touched.userName
                                  }
                                >
                                  <FormLabel htmlFor="userName">
                                    DAO Creator
                                  </FormLabel>
                                  <Input
                                    {...field}
                                    id="userName"
                                    placeholder="User Name"
                                  />
                                  <FormErrorMessage>
                                    {form.errors.userName}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                          </Flex>

                          <Field
                            name="tokenSymbol"
                            validate={validateTokenSymbol}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.tokenSymbol &&
                                  form.touched.tokenSymbol
                                }
                                mb={4}
                              >
                                <FormLabel htmlFor="tokenSymbol">
                                  Token Symbol
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="tokenSymbol"
                                  placeholder="Token Symbol"
                                />
                                <FormErrorMessage>
                                  {form.errors.name}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <div>
                            <FormControl mb={4}>
                              <FormLabel htmlFor="creatorAllocation">
                                Creator Token Allocation
                              </FormLabel>
                              <NumberInput
                                min={0}
                                max={100}
                                defaultValue={10}
                                onChange={v => {
                                  props.setFieldValue('creatorAllocation', v);
                                }}
                              >
                                <NumberInputField id="creatorAllocation" />
                                <NumberInputStepper>
                                  <NumberIncrementStepper />
                                  <NumberDecrementStepper />
                                </NumberInputStepper>
                              </NumberInput>
                            </FormControl>
                          </div>

                          <Field
                            name="twitterUsername"
                            validate={validateTwitterUsername}
                          >
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.twitterUsername &&
                                  form.touched.twitterUsername
                                }
                                mb={4}
                              >
                                <FormLabel htmlFor="twitterUsername">
                                  Twitter Username
                                </FormLabel>
                                <Input
                                  {...field}
                                  id="twitterUsername"
                                  placeholder="Twitter Username"
                                />
                                <FormErrorMessage>
                                  {form.errors.twitterUsername}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Button
                            borderRadius="full"
                            bg="black"
                            color="white"
                            w="100%"
                            isLoading={props.isSubmitting}
                            type="submit"
                          >
                            Submit
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </Box>
                </Fragment>
              )}
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default FormDao;
