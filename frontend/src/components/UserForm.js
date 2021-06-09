import { Box, Button, Checkbox, CheckboxGroup, Flex, FormControl, FormLabel, Heading, HStack, Input, Link, Text, useToast } from "@chakra-ui/react";
import useForm from "../hooks/useForm";

export const UserForm = () => {

    const [form, onChange, clear] = useForm({ email: "", cpf: "", name: "" })

    return (
        <>
            <Flex
                align="center"
                justify="center"
                h="90vh" w="100%" p={5}
                direction="column">
                <Box borderWidth={2}
                    p={5}
                    borderRadius={5}
                    maxWidth="500px"
                >
                    <Heading>Create your account</Heading>
                    <form onSubmit={"createLogin"} >
                        <FormControl mt="20px">
                            <FormLabel>Name</FormLabel>
                            <Input
                                value={form.name}
                                name={"name"}
                                onChange={onChange}
                                type="text"
                                variant="outline"
                                placeholder="Enter your name"
                                isRequired />
                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel>Email adress</FormLabel>
                            <Input
                                value={form.email}
                                name={"email"}
                                onChange={onChange}
                                type="email"
                                variant="outline"
                                placeholder="Enter your email address"
                                isRequired />
                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel >CPF</FormLabel>
                            <Input
                                value={form.cpf}
                                name={"cpf"}
                                onChange={onChange}
                                type="number"
                                variant="outline"
                                placeholder="Enter your CPF"
                                isRequired />

                        </FormControl>
                        <FormControl mt="10px">
                            <FormLabel >Acquirements</FormLabel>
                            <CheckboxGroup colorScheme="green" isRequired>
                                <HStack>
                                    <Checkbox value="naruto">Naruto</Checkbox>
                                    <Checkbox value="sasuke">Sasuke</Checkbox>
                                    <Checkbox value="kakashi">kakashi</Checkbox>
                                </HStack>
                            </CheckboxGroup>
                        </FormControl>

                        <Button mt="20px" bg="teal" size="lg" w="full" type="submit">Register</Button>
                    </form>
                </Box>

            </Flex>
        </>
    )
}

