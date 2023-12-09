import { categoryList } from "../constant/category";
import "./category.css";
import { motion } from "framer-motion";

function Category() {
  return (
    <div className="category-container" id="book">
      <div className="category-header">
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
          Categories
        </motion.h2>
        <motion.p
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
          Explore expansive collection of books!
        </motion.p>
      </div>
      <div className="category-list">
        {categoryList.map((value) => {
          return (
            <motion.div
              className="category-item"
              key={value.id}
              initial={{
                scale: 1.2,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: value.duration,
              }}
            >
              <img src={value.url} alt={value.name} />
              <h3>{value.name}</h3>
              {/* <h5>{value.author}</h5> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
