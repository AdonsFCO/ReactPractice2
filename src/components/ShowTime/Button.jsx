
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({stopTime, children}) => {


    return(<button className="btn btn-outline-primary"onClick={stopTime}>{children}</button>)





}
export default Button;