import { Box } from "@mui/material"
import Termsbanner from "./Bannerterms"
import ImageExample from "./Imageterm"
import TermsAndConditions from "./terms"
import TwoImagesRow from "./Imagesec"
import Terms from "./terms"

const Termsandcondition =() =>{
    return(
        <Box>
            <Termsbanner/>
            <ImageExample/>
            <Terms/>
            <TwoImagesRow/>
            
        </Box>
    )
}

export default Termsandcondition;