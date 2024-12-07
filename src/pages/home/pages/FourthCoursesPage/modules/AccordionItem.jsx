import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';

const AccordionItem = ({ title, items, isOpen, onClick }) => {
  return (
    <motion.div
      className={`accordion-item ${isOpen ? 'open' : ''}`}
      initial={false}
      animate={{ backgroundColor: isOpen ? '#ffffff' : '#f8fafc' }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="accordion-header"
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <motion.span>{title}</motion.span>
        <motion.span
          className="accordion-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '−' : '+'}
        </motion.span>
      </motion.button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div className="course-grid">
              {items.map((item, index) => (
                <CourseCard key={index} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AccordionItem;
