import { Box } from "@mui/material";
import Donorbanner from "./Donorbanner";
import Dabout from "./Donoraboutus";
import DonorHeroSection from "./Donorherosection";
const Donor =()=>{
    return(
        <Box>
            <Donorbanner/>
            <Dabout/>
            <DonorHeroSection />
        </Box>
    )
}
export default Donor;