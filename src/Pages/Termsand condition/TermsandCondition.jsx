import { Box } from "@mui/material"
import Termsbanner from "./Bannerterms"
import ImageExample from "./Imageterm"
import TermsAndConditions from "./terms"
import TwoImagesRow from "./Imagesec"

const termsandcondition =() =>{
    return(
        <Box>
            <Termsbanner/>
            <ImageExample/>
            <TermsAndConditions/>
            <TwoImagesRow/>
        </Box>
    )
}

export default termsandcondition;