import { Box, Flex } from "@chakra-ui/layout"
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table"

export const AdminList = () => {
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

                >
                    <Table variant="striped" colorScheme="teal">
                        <TableCaption>User List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th isNumeric>CPF</Th>
                                <Th isNumeric>Phone</Th>
                                <Th>Acquirements</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                                <Td isNumeric>25.4</Td>
                                <Td>inches</Td>
                            </Tr>
                        </Tbody>
                        
                        <Tfoot>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th isNumeric>CPF</Th>
                                <Th isNumeric>Phone</Th>
                                <Th>Acquirements</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </Box>
            </Flex>

        </>
    )
}
