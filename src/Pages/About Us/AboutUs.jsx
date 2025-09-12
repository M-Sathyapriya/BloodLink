import { Box } from "@mui/material"
import Bannerabout from "./Bannerabout"
import WhoWeAre from "./Who"
import StatsSection from "./Status"
import WelcomeSection from "./Welcome"
import PopularCampaigns from "./Campaigns"
import Testimonial from "../faq/testimonials"
import DonationBanner from "../Homepage/DonationBanner"
import DonationProcess from "./process"
import TeamSection from "../Homepage/TeamSection"

const Aboutus =() =>{
    return (
        <Box>
            <Bannerabout/>
            <WhoWeAre/>
            <StatsSection/>
            <WelcomeSection/>
            <PopularCampaigns/>
            <Testimonial/>
            <DonationBanner/>
            <DonationProcess/>
            <TeamSection/>


        </Box>
    )
}
export default Aboutus;