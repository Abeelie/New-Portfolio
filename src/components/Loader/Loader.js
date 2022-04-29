import "./loader.css";
import {Box} from "@mui/material";
import LoaderImage from "../../assets/Loader/Loader.gif";

const Loader = () => {
    return (
        <div className="loader" >
            <Box>
                <div align="center">
                    <img src={LoaderImage} 
                         width={"100%"}
                    />
                    <p className="loading-text">Loading........</p>
                </div>
            </Box>
        </div>
    )
}

export default Loader