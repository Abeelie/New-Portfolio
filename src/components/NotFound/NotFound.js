import "./notfound.css";
import NotFoundImage from "../../assets/NotFound/404.gif";

const NotFoundPage = () => {
    return (
        <div align="center">
            <a className="go-back-home" href="/">Go Back Home</a>
            <img src={NotFoundImage}
                 alt="404"
                 height="100%"
                 width="100%"
            />
        </div>
    )
}


export default NotFoundPage;