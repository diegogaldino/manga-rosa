import { Flex } from "@chakra-ui/layout"
import { AdminList } from "../components/AdminList"
import { UserForm } from "../components/UserForm"

export const Home = ()=>{
    return(
        <>
        User
            <UserForm/>
        Admin
            <AdminList/>
        </>
    )
}