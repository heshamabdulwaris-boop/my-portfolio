import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700/50">
      <div className="flex items-center gap-4 mb-6">
        {/* <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
          loading="lazy"
        /> */}
        <div>
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {testimonial.name}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default TestimonialCard;
