import { ChangeEvent, FormEvent, useState } from "react";

//Styles
import "./Contact.scss";

//Assets
import Plane from '../../../assets/icons/avion-de-papel.png'

//Components
import Input from "../../../components/atoms/Input/Input";
import TextArea from "../../../components/atoms/TextArea/TextArea";
import Button from "../../../components/atoms/Button/Button";
import { Successfully } from "../../../utilities/SweetAlert/SweetAlertModal";

// Interfaces
interface stateInfo{
  fullname: string
  phone: string
  email: string
  comment: string
}

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<stateInfo>({
    fullname: "",
    phone: "",
    email: "",
    comment: ""
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget
		setContactInfo(prevInfo => ({
			...prevInfo,
			[name]: value,
		}))
	}

  // Desde aquí podemos enviar los datos al servidor
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(contactInfo)
        Successfully("Message sent succesfully! We appreciate your interest and will respond shortly.")

      // Esperamos dos segundos y limpiamos lo datos de los inputs
      setTimeout(() => {
        setContactInfo({ fullname: "", phone: "", email: "", comment: "" });
      }, 2000)
      
    } catch (error) {
      console.log()
    }
    
  };


  return (
    <div className="Contact">
        <div className="c-left">
            <div className="c-header">
                <h1 className="c_title-header">Contact us</h1>
                <p className="c_descrip-header">
                  Are you looking to give a special touch to your personal fragrances?
                  We offer you a quote that enhances your uniqueness with elegance and
                  distinction.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="c-form">
                <div className="cnt-inputs">
                    <Input text="Full name" value={contactInfo.fullname} name="fullname" className="f-input" 
                      placeholder="Full name" onChange={handleChange} />
                    <Input className="f-input" value={contactInfo.phone} name="phone" type="number" text="Phone number" 
                      placeholder="Phone number" onChange={handleChange} />
                </div>
                <Input type="email" value={contactInfo.email} name="email" className="f-input" text="Email" 
                    placeholder="Email" onChange={handleChange} />
                <TextArea text="Leave a comment" value={contactInfo.comment} name="comment" 
                    placeholder="Leave a comment" onChange={handleChange} />
                <Button text="Send" submit className="btn-submit" />
            </form>
        </div>
        <div className="c-right">
            <img src={Plane} alt="" className="c-plane"/>
        </div>
    </div>
  );
};

export default Contact;
