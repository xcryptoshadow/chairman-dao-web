import React, { Fragment, useState } from 'react';
import axios from 'axios';

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
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

// formik
import { Formik, Form, Field } from 'formik';

const CreateDAO = () => {
  const [loading, setLoading] = useState(false);
  const [daoSetup, setDaoSetup] = useState(false);

  const validateDaoName = value => {
    let error;
    if (!value) {
      error = 'DAO Name is required';
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

  const validateTokenAllocation = value => {
    let error;
    if (!value) {
      error = 'Creator Token Allocation is required';
    }
    return error;
  };

  const validateDiscordId = value => {
    let error;
    if (!value) {
      error = 'Creator Discord ID is required';
    }
    return error;
  };

  const submitDaoCreation = async (values, actions) => {
    try {
      setLoading(true);
      console.log('VALUES: ', values);
      const response = await axios.post(
        `http://localhost:3000/v1/dao/createDaoPending/?daoName=${values.daoName}&tokenSymbol=${values.tokenSymbol}&creatorAllocation=${values.tokenAllocation}&userID=${values.discordId}`
      );
      setLoading(false);
      setDaoSetup(true);
    } catch (err) {
      console.log('ERR: ', err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mb={10}>
          {loading ? (
            <Fragment>
              <Center>
                <Box align="center" justify="center">
                  <Spinner size="xl" />
                  <div>Please wait as we process and set up your DAO</div>
                </Box>
              </Center>
            </Fragment>
          ) : (
            <Fragment>
              <Box
                maxW="xl"
                borderWidth="8px"
                borderRadius="20px"
                borderColor="black"
                align="center"
                justify="center"
              >
                <Container p={4}>
                  {daoSetup ? (
                    <Fragment>
                      <Box mb={8}>
                        <Text fontSize="2xl" fontWeight="500">
                          Congrats your DAO has been set up!
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
                          Connect the DAO to your Discord
                        </Button>
                      </Box>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Box mb={8}>
                        <Text fontSize="2xl" fontWeight="500">
                          Create A New DAO
                        </Text>
                      </Box>

                      <Box mb={8}>
                        <Formik
                          initialValues={{
                            daoName: '',
                            tokenSymbol: '',
                            tokenAllocation: '',
                            discordId: '',
                          }}
                          onSubmit={(values, actions) => {
                            submitDaoCreation(values, actions);
                          }}
                        >
                          {props => (
                            <Form>
                              <Field name="daoName" validate={validateDaoName}>
                                {({ field, form }) => (
                                  <FormControl
                                    isInvalid={
                                      form.errors.daoName &&
                                      form.touched.daoName
                                    }
                                    mb={4}
                                  >
                                    <FormLabel htmlFor="daoName">
                                      DAO name
                                    </FormLabel>
                                    <Input
                                      {...field}
                                      id="daoName"
                                      placeholder="daoName"
                                    />
                                    <FormErrorMessage>
                                      {form.errors.daoName}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>

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
                                      placeholder="tokenSymbol"
                                    />
                                    <FormErrorMessage>
                                      {form.errors.tokenSymbol}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>

                              <Field
                                name="tokenAllocation"
                                validate={validateTokenAllocation}
                              >
                                {({ field, form }) => (
                                  <FormControl
                                    isInvalid={
                                      form.errors.tokenAllocation &&
                                      form.touched.tokenAllocation
                                    }
                                    mb={4}
                                  >
                                    <FormLabel htmlFor="tokenAllocation">
                                      Creator Token Allocation
                                    </FormLabel>
                                    <Input
                                      {...field}
                                      id="tokenAllocation"
                                      placeholder="tokenAllocation"
                                    />
                                    <FormErrorMessage>
                                      {form.errors.tokenAllocation}
                                    </FormErrorMessage>
                                  </FormControl>
                                )}
                              </Field>

                              <Field
                                name="discordId"
                                validate={validateDiscordId}
                              >
                                {({ field, form }) => (
                                  <FormControl
                                    isInvalid={
                                      form.errors.discordId &&
                                      form.touched.discordId
                                    }
                                    mb={4}
                                  >
                                    <FormLabel htmlFor="discordId">
                                      Creator Discord ID
                                    </FormLabel>
                                    <Input
                                      {...field}
                                      id="discordId"
                                      placeholder="discordId"
                                    />
                                    <FormErrorMessage>
                                      {form.errors.discordId}
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
            </Fragment>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

export default CreateDAO;
