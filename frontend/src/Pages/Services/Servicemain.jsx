import { Box } from "@mui/material"
import BannerServices from "./ServicesBanner";
import Services from "../Homepage/Homeservice";
import BloodDonationcards from "../Homepage/Blooddonationcards";



const Service=() =>{
    return(
        <Box>
            <BannerServices/>
            <BloodDonationcards/>
            <Services/>
        </Box>
    )
}
export default Service;