import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/ui/SectionHeading';
import TimelineItem from '../../components/ui/TimelineItem';
import { experiences } from '../../data/experience';

const Experience = () => {
  const [filter, setFilter] = useState('all');

  const filteredExperiences = filter === 'all'
    ? experiences
    : experiences.filter((exp) => exp.type === filter);

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Experience & Education" subtitle="My professional journey" />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          {['all', 'internship', 'education'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all duration-300 ${
                filter === filterType
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {filteredExperiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
