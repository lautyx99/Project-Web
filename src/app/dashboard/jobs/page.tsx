'use client';

import { useRouter } from 'next/navigation';
import { JobCard } from '@/components/jobs/JobCard';

export default function JobsPage() {

  const router = useRouter();

  const jobs = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'MercadoLibre',
      location: 'Buenos Aires',
      modality: 'Remoto',
      salary: '$200k - $250k ARS',
      matchScore: 95,
      matchingSkills: ['React'],
      missingSkills: ['Docker'],
    },
  ];

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          {...job}
        />
      ))}
    </div>
  );
}