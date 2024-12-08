import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ item, index }) => {
  return (
    <motion.div
      className="course-card"
      
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, 1, -1, 0],
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="course-icon">{item.icon}</div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
};

export default CourseCard;
