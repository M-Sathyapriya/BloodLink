import RequestBloodForm from "../../components/recipientrequest";
import Bannercontact from "./Bannercontact";
import ContactPage from "./C2";
import Usersection from "./sec1";
import SocialButtons from "./sec2";
const Contact =() =>{
    return(
        <>
        <Bannercontact />
        <ContactPage/>
        <SocialButtons />
        <Usersection />
        <RequestBloodForm/>
        </>
    )
}
export default Contact;