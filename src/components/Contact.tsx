import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact: React.FunctionComponent<any> = () => {
  const [nameFocused, setNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [textFocused, setTextFocused] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  const templatedsParams = {
    from_name: name,
    to_name: "plusbeauxjours@gmail.com",
    subject: `${name} from www.plusbeauxjours.info`,
    message_html: text,
  };

  const sendEmail = () => {
    emailjs.send("gmail", "template_5qToBuwo", templatedsParams, "user_8ytKsFL160TILx8KsgU0x").then(
      (result) => {
        console.log(result.text);
        toast.success("Email sent!!");
      },
      (error) => {
        console.log(error.text);
        toast.error(error.text);
      },
    );
    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="max-w-screen-lg w-full h-500 p-4">
      <form action="" method="post">
        <div className="flex flex-wrap justify-between">
          <div className="mb-8 w-full md:w-1/2">
            <div className="relative">
              <input
                className="bg-gray-100 border border-gray-900 rounded-md h-12 w-full md:w-96 text-lg font-light px-4 focus:outline-none"
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                onChange={(event) => setName(event.target.value)}
                type="text"
                value={name}
                autoComplete="off"
              />
              <label
                className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-all ${
                  name || nameFocused ? "text-xs -translate-y-8" : "text-lg"
                }`}>
                Name
              </label>
            </div>
          </div>
          <div className="mb-8 w-full md:w-1/2">
            <div className="relative">
              <input
                className="bg-gray-100 border border-gray-900 rounded-md h-12 w-full md:w-96 text-lg font-light px-4 focus:outline-none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                value={email}
                autoComplete="off"
              />
              <label
                className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-all ${
                  email || emailFocused ? "text-xs -translate-y-8" : "text-lg"
                }`}>
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="relative mb-8">
          <textarea
            className="bg-gray-100 border border-gray-900 rounded-md w-full h-72 text-lg font-light p-4 focus:outline-none resize-none"
            name="text"
            value={text}
            required
            onFocus={() => setTextFocused(true)}
            onBlur={() => setTextFocused(false)}
            onChange={(event) => setText(event.target.value)}
            autoComplete="off"
          />
          <label
            className={`absolute top-6 left-4 transform transition-all ${
              text || textFocused ? "text-xs -translate-y-4" : "text-lg"
            }`}>
            Message
          </label>
        </div>
        <div className="flex justify-center" onClick={() => sendEmail()}>
          <button className="w-72 h-12 mt-8 bg-blue-500 text-white rounded-md text-xl cursor-pointer flex justify-center items-center border-none">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
