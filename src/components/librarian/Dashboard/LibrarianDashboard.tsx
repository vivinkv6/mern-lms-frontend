import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

import DashboardIcon from "@rsuite/icons/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";

import icon1 from "/borrow.png";
import icon2 from "/readerIcon.png";
import icon3 from "/icon3.png";
import icon4 from "/icon4.png";
import icon5 from "/icon5.png";

type sideNavProp = {
  setNav: React.Dispatch<React.SetStateAction<number>>;
};

function LibrarianDashboard() {
  const [nav, setNav] = useState<number>(1);
  let ResultComponent = <Users />;

  switch (nav) {
    case 1:
      ResultComponent = <Users />;
      break;
    case 2:
      ResultComponent = <Users />;
      break;
    case 3:
      ResultComponent = <Books />;
      break;
    case 4:
      ResultComponent = <Category />;
      break;
    default:
      ResultComponent = <Users />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xl={3} md={3} xs={4}>
        <SideNav setNav={setNav} />
      </Grid>
      <Grid item xl={9} md={9} xs={8}>
        {ResultComponent}
      </Grid>
    </Grid>
  );
}

function SideNav(prop: sideNavProp) {
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
            onClick={() => prop.setNav(1)}
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
            onClick={() => prop.setNav(2)}
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
            onClick={() => prop.setNav(3)}
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
            onClick={() => prop.setNav(4)}
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
          onClick={() => prop.setNav(1)}
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
          onClick={() => prop.setNav(2)}
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
          onClick={() => prop.setNav(3)}
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
          onClick={() => prop.setNav(4)}
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

function Users() {
  return (
    <>
      <input type="text" className="search" name="" id="" />

      {/* Mobile Design */}
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
              <th>Book </th>
              <td>Harry Potter</td>
            </tr>
            <tr>
              <th>Mob</th>
              <td>1717271717</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>Thrissur</td>
            </tr>
            <tr>
              <th>Start Date</th>
              <td>12/04/2023</td>
            </tr>
            <tr>
              <th>End Date</th>
              <td>21/04/2023</td>
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

      {/* Desktop, laptop , tablet design */}
      <motion.table
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
          type: "tween",
        }}
        border={1}
        cellPadding={3}
        style={{ width: "100%" }}
      >
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Book</th>
          <th>Author</th>
          <th>Edition</th>
          <th>Mobile</th>
          <th>Place</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Edit/Return</th>
        </tr>
        <tr>
          <td>001</td>
          <td>Jack</td>
          <td>Harry Potter</td>
          <td>JK Rowling</td>
          <td>5</td>
          <td>3837443344</td>
          <td>Thrissur</td>
          <td>12/04/2023</td>
          <td>21/04/2023</td>
          <td align="center">
            <Button
              color="info"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              Return
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>Jack</td>
          <td>Harry Potter</td>
          <td>JK Rowling</td>
          <td>5</td>
          <td>3837443344</td>
          <td>Thrissur</td>
          <td>12/04/2023</td>
          <td>21/04/2023</td>
          <td align="center">
            <Button
              color="info"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              Return
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>Jack</td>
          <td>Harry Potter</td>
          <td>JK Rowling</td>
          <td>5</td>
          <td>3837443344</td>
          <td>Thrissur</td>
          <td>12/04/2023</td>
          <td>21/04/2023</td>
          <td align="center">
            <Button
              color="info"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              Return
            </Button>
            <Button
              color="primary"
              variant="contained"
              startIcon={<DeleteIcon />}
              style={{ margin: 5 }}
            >
              update
            </Button>
          </td>
        </tr>
      </motion.table>
    </>
  );
}

function Books() {
  return (
    <>
      <input type="text" className="search" name="" id="" />

      {/* Mobile Design */}
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
              <th>Book: </th>
              <td>Beauty And The Beast</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Book: </th>
              <td>Beauty And The Beast</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Book: </th>
              <td>Beauty And The Beast</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Book: </th>
              <td>Beauty And The Beast</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>Fairy Tale</td>
            </tr>
          </div>
        </div>
      </div>

      {/* Desktop, laptop , tablet design */}
      <motion.table
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "tween",
        }}
        border={1}
        cellPadding={3}
      >
        <tr>
          <th>ID</th>
          <th>Banner</th>
          <th>Book</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>
          <td>Beauty and the Beast</td>
          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>
          <td>Beauty and the Beast</td>
          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>
          <td>Beauty and the Beast</td>
          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
      </motion.table>
    </>
  );
}
function Category() {
  return (
    <>
      <input type="text" className="search" name="" id="" />

      {/* Mobile Design */}
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
              <th>Book: </th>
              <td>Beauty And The Beast</td>
            </tr>
            <tr>
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Category: </th>
              <td>Fairy Tale</td>
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
              <th>Category: </th>
              <td>Fairy Tale</td>
            </tr>
          </div>
        </div>
      </div>

      {/* Desktop, laptop , tablet design */}
      <motion.table
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "tween",
        }}
        border={1}
        cellPadding={3}
      >
        <tr>
          <th>ID</th>
          <th>Banner</th>
          <th>Category</th>
          <th>Remove/Edit</th>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>
          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>

          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
        <tr>
          <td>001</td>
          <td>
            <img
              height={80}
              width={80}
              className="profile"
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </td>

          <td>Fairy Tale</td>
          <td align="center">
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button color="primary" variant="contained" startIcon={<Edit />}>
              Update
            </Button>
          </td>
        </tr>
      </motion.table>
    </>
  );
}

export default LibrarianDashboard;
