import "./product.css";
import { bookList } from "../constant/product";
import { motion } from "framer-motion";

function Product() {
  return (
    <div className="product-container" id="book">
      <div className="product-header">
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
          Products
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
          Uncover timeless classics and captivating new releases, all in one
          place.
        </motion.p>
      </div>
      <div className="product-list">
        {bookList.map((value) => {
          return (
            <motion.div
              className="product-item"
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
              {/* <h3>{value.name}</h3>
              <h5>{value.author}</h5> */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
