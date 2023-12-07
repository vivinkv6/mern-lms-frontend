import img from "/about.jpg";
import "./about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          About US
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2.5,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          placeat minus voluptas nihil ea totam blanditiis in doloribus nemo eum
          est tempore repudiandae ipsum sit ad repellendus suscipit, eaque
          tenetur. Voluptatibus fuga blanditiis qui reprehenderit vel! Eligendi
          dignissimos doloribus distinctio dolore voluptates laboriosam eius
          consequatur cum alias, esse obcaecati fuga eum delectus minus! Aliquam
          consequatur hic labore. Animi, necessitatibus iusto! Velit iure
          blanditiis voluptas quo eum nulla dignissimos quas eius veritatis ut
          officiis nam error magni ea at, perspiciatis natus hic sapiente aut
          culpa id ad mollitia odio eos? Alias?
        </motion.p>
      </div>
      <div className="about-img">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
        >
          About US
        </motion.h2>
        <motion.img
          src={img}
          alt=""
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        />
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          placeat minus voluptas nihil ea totam blanditiis in doloribus nemo eum
          est tempore repudiandae ipsum sit ad repellendus suscipit, eaque
          tenetur. Voluptatibus fuga blanditiis qui reprehenderit vel! Eligendi
          dignissimos doloribus distinctio dolore voluptates laboriosam eius
          consequatur cum alias, esse obcaecati fuga eum delectus minus! Aliquam
          consequatur hic labore. Animi, necessitatibus iusto! Velit iure
          blanditiis voluptas quo eum nulla dignissimos quas eius veritatis ut
          officiis nam error magni ea at, perspiciatis natus hic sapiente aut
          culpa id ad mollitia odio eos? Alias?
        </motion.p>
      </div>
    </div>
  );
}

export default About;
