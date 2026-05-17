import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 group"
    >
      <div className="p-4 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="text-4xl text-primary-600 dark:text-primary-400" />
      </div>

      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        {service.title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
