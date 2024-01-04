"use client";
import { sendEmail } from "@/actions/sendEmail";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-12"
          >
            You can also contact me at <a className="text-accent" href="mailto:anuragsawant@duck.com">anuragsawant@duck.com</a> 
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              } else {
                console.log(data);
              }

              toast.success("Email sent successfully!");
            }}
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input
                type="email"
                placeholder="Email"
                name="senderEmail"
                className="input"
              />
            </div>
            <input type="text" placeholder="Subject" name="Subject" className="input" />
            <textarea placeholder="Message" name="message" className="textarea"></textarea>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
