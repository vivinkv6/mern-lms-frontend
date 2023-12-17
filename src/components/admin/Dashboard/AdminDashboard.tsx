import "./sidenav.css";

import DashboardIcon from "@rsuite/icons/Dashboard";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import icon4 from "/icon4.png";
import icon5 from "/icon5.png";

import { motion } from "framer-motion";
import { Grid } from "@mui/material";


import DeleteIcon from "@mui/icons-material/Delete";


function AdminDashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xl={3} md={3} xs={4}>
        <SideNav />
      </Grid>
      <Grid item xl={9} md={9} xs={8}>
        <Users />
      </Grid>
    </Grid>
  );
}

// Sidenav Component

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
            <img src={icon2} className="icon" alt="" />
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
            <img src={icon1} className="icon" alt="" />
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

// users component

function Users() {
  return (
    <>
      <input type="text" className="search" name="" id="" />
      <div className="card-container">
        <div className="card-item">
          <div className="card-header">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="profile"
              alt=""
            />
            <DeleteIcon className="btn" fontSize="medium" />
          </div>
          <div className="card-body">
            <tr>
              <th>Id: </th>
              <td>001</td>
            </tr>
            <tr>
              <th>Name: </th>
              <td>Jack</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>jack@20</td>
            </tr>
          </div>
        </div>
        <div className="card-item">
          <div className="card-header">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="profile"
              alt=""
            />
            <DeleteIcon className="btn" fontSize="medium" />
          </div>
          <div className="card-body">
            {/* <h2>Id:001</h2>
          <h2>Name: Jack</h2>
          <h3>Email: jack@200</h3> */}
            <tr>
              <th>Id: </th>
              <td>001</td>
            </tr>
            <tr>
              <th>Name: </th>
              <td>Jack</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>jack@20</td>
            </tr>
          </div>
        </div>
        <div className="card-item">
          <div className="card-header">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="profile"
              alt=""
            />
            <DeleteIcon className="btn" fontSize="medium" />
          </div>
          <div className="card-body">
            <tr>
              <th>Id: </th>
              <td>001</td>
            </tr>
            <tr>
              <th>Name: </th>
              <td>Jack</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>jack@20</td>
            </tr>
          </div>
        </div>

        <div className="card-item">
          <div className="card-header">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="profile"
              alt=""
            />
            <DeleteIcon className="btn" fontSize="medium" />
          </div>
          <div className="card-body">
            <tr>
              <th>Id: </th>
              <td>001</td>
            </tr>
            <tr>
              <th>Name: </th>
              <td>Jack</td>
            </tr>
            <tr>
              <th>Email: </th>
              <td>jack@20</td>
            </tr>
          </div>
        </div>
      </div>
    </>
  );
}





// function Librarian() {
//   return <>Librarian List</>;
// }
// function Books() {
//   return <>Books List</>;
// }
// function Category() {
//   return <>Category List</>;
// }

export default AdminDashboard;
