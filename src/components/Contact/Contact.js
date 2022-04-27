import "./contact.css";
import { 
    Button, 
    Card, 
    CardContent, 
    Grid, 
    TextField, 
} from "@mui/material";
import { useState, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
    const initialFormState = {
        firstName: "", lastName: "", email: "", phoneNumber: "", message: ""
    };
    const [formData, setFormData] = useState(initialFormState);
    const formID = process.env.REACT_APP_ContactsFormKey || process.env.ContactsFormKey;
    const formUrl = `https://submit-form.com/${formID}`;
    const [isSubmit, setIsSubmit] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState();
    const recaptchaRef = useRef();
    const recaptchaKey = process.env.REACT_APP_RecaptchaKey || process.env.RecaptchaKey; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(recaptchaToken === undefined) {
            swal({
                text: "Please click on the I am not a robot to submit", 
                icon: "error"
            });
        }else {
            setIsSubmit(true);
            await sendMessage();
            setFormData(initialFormState);
            setIsSubmit(false);
        }
    }



    const sendMessage = async () => {
        const data = {
            ...formData,
            "g-recaptcha-response": recaptchaToken
        }
        try {
            await axios.post(formUrl, data);
            await swal({title: "Message Sent", icon: "success"});
            window.location.reload();
        } catch(error){
            await swal({title: error, text: "Message not submitted", icon: "error"});
            window.location.reload();
        }
    }

    const handleChangeToken = (token) => {
        setRecaptchaToken(token)
    }

    return (
        <div align="center">
            <ScreenHeading title={"Contact Me"} subHeading={"I Would Love to Hear From You"} />
            <Card className="card-form-contact">
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="First Name" 
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       name="firstName"
                                       id="firstName"
                                       placeholder="Enter First Name"
                                       variant="outlined"
                                       fullWidth
                                       required/>

                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Last Name" 
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       name="lastName"
                                       id="lastName"
                                       placeholder="Enter Last Name"
                                       variant="outlined"
                                       fullWidth
                                       required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="E-mail" 
                                       value={formData.email}
                                       onChange={handleChange}
                                       name="email"
                                       id="email"
                                       type="email"
                                       placeholder="Enter E-mail"
                                       variant="outlined"
                                       fullWidth
                                       required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Phone Number" 
                                       value={formData.phoneNumber}
                                       onChange={handleChange}
                                       name="phoneNumber"
                                       id="phoneNumber"
                                       type="tel"
                                       placeholder="Enter Phone Number"
                                       variant="outlined"
                                       fullWidth
                                       required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Message" 
                                       value={formData.message}
                                       onChange={handleChange}
                                       name="message"
                                       id="message"
                                       multiline 
                                       rows={5}
                                       placeholder="Enter Message"
                                       variant="outlined"
                                       fullWidth
                                       required/>
                        </Grid>
                        <Grid xs={12} item>
                               {
                                    document.readyState === "complete" ? 
                                    <ReCAPTCHA ref={recaptchaRef} 
                                               sitekey={recaptchaKey} 
                                               onChange={handleChangeToken}/> 
                                               : "Loading.............."
                                }
                        </Grid>
                        <Grid xs={12} item>
                            <Button variant="contained"
                                    fullWidth
                                    color="primary"
                                    type="submit"
                                    style={{backgroundColor: "rgb(0 0 0)"}}
                                >{isSubmit ? "Submitting right now!........." : "Submit Now!"}
                            </Button>
                        </Grid>
                    </Grid>
                  </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact;