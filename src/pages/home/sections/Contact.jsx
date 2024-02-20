import Heading from "../../../components/Heading";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 px-8 md:px-16 lg:px-32 mb-14">
      <div className="flex items-center justify-center">
        <Heading subTitle="let's talk" title="Get in Touch" center />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
        <div className="w-full md:w-[50%] flex items-center justify-center ">
          <img
            src="../../../public/images/contact.svg"
            width="400px"
            alt="contact-svg"
          />
        </div>
        <form className="flex flex-col gap-5 w-full md:w-[50%]">
          <div className="grid grid-cols-none md:grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-4">
            <Input label="Name" id="name" type="text" />
            <Input label="Email" id="email" type="email" />
            {/* react-phone-number-input */}
            <Input label="Phone number" id="number" type="text" />
            <Input label="Subject" id="subject" type="text" />
            <div className="md:col-span-2">
              <Input label="Message" id="message" textarea={true} />
            </div>
          </div>
          <div className="self-start">
            <Button label="Submit Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
