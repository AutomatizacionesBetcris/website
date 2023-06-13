import { motion } from "framer-motion";

const PaymentGrid = ({ images, handleImageClick }) => {
  return (
    <>
      <div className="grid grid-cols-3 p-4 md:grid-cols-5 lg:grid-cols-5 gap-4 lg:m-56 lg:mt-5">
        {images.map((image, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <motion.img
              src={image.img}
              alt={`Imagen ${index + 1}`}
              onClick={() => handleImageClick(image)}
              className="w-38 rounded-lg overflow-hidden border-black shadow-lg hover:scale-110 transition-transform duration-300 ease-out"
            />
          </motion.a>
        ))}
      </div>
    </>
  );
};

export default PaymentGrid;
