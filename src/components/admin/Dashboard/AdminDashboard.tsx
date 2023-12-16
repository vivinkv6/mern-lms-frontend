import "./sidenav.css";

import DashboardIcon from "@rsuite/icons/Dashboard";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import icon4 from "/icon4.png";
import icon5 from "/icon5.png";

import { motion } from "framer-motion";

function AdminDashboard() {
  return (
    <div className="admin-container">
      <SideNav />
      <div>Admin Dashboard</div>
    </div>
  );
}

function SideNav() {
  const parentVariant = {
    init: {
      x: -500,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={parentVariant}
        initial="init"
        animate="visible"
        className="sidenav"
      >
        <span>
          Dashboard <DashboardIcon color="white" height={50} width={50} />
        </span>
        <ul>
          <motion.li
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
          >
            <img src={icon1} className="icon" alt="" />
            user
          </motion.li>
          <motion.li
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
          >
            <img src={icon2} className="icon" alt="" />
            Librarian
          </motion.li>
          <motion.li
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
          >
            <img src={icon3} className="icon" alt="" />
            Books
          </motion.li>
          <motion.li
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 2.5,
              duration: 1,
            }}
          >
            <img src={icon4} className="icon" alt="" />
            Category
          </motion.li>
          <motion.li
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 3,
              duration: 1,
            }}
          >
            <img src={icon5} className="icon" alt="" />
            Logout
          </motion.li>
        </ul>
      </motion.div>

      {/* Sidenav 2 */}

      <motion.div
        variants={parentVariant}
        initial="init"
        animate="visible"
        className="sidenav2"
      >
        <span>
          <DashboardIcon color="white" height={50} width={50} />
        </span>

        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          src={icon1}
          className="icon"
          alt=""
        />

        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          src={icon2}
          className="icon"
          alt=""
        />

        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          src={icon3}
          className="icon"
          alt=""
        />

        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 1,
          }}
          src={icon4}
          className="icon"
          alt=""
        />

        <motion.img
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
          src={icon5}
          className="icon"
          alt=""
        />
      </motion.div>
    </>
  );
}

export default AdminDashboard;
