import {Image} from "react-bootstrap"
import image from './imgsrc.jpg'
function Img () {    

return  (
    <div className ="image">
    <Image src="/image.pubic.jpg" fluid /> 
    <Image src={image} fluid /> 
    
    </div>
)
}


export default Img ;