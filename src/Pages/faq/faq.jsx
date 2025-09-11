import { Box } from "@mui/material"
import Bannerfaq from "./faqbanner";
import DonationBanner from "../Homepage/DonationBanner";
import Testimonial from "./testimonials";
import Questions from "./questions";



const FAQ=() =>{
    return(
        <Box>
           <Bannerfaq/> 
           <Questions/>
           <DonationBanner/>
           <Testimonial/>
        </Box>
    )
}
export default FAQ;