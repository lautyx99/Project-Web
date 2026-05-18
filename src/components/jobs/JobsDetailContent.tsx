// components/jobs/JobDetailPageContent.tsx

'use client';

import { useRouter } from 'next/navigation';

import {
  MapPin,
  Briefcase,
  DollarSign,
  Calendar,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  ArrowLeft,
} from 'lucide-react';

import { MatchScore } from '@/components/jobs/MatchScore';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface JobDetailPageContentProps {
   params: Promise<{
    id: string;
  }>;}

export default async function JobDetailPageContent({
   params,
}: JobDetailPageContentProps) {

  const router = useRouter();

  const { id } = await params;

  const job = {
    id,

    title: 'Senior React Developer',

    company: 'MercadoLibre',

    location: 'Buenos Aires, Argentina',

    modality: 'Remoto',

    salary: '$200k - $250k ARS',

    postedDate: 'Hace 3 días',

    matchScore: 95,

    description: `
Estamos buscando un Senior React Developer para unirse a nuestro equipo.

Responsabilidades:
• Desarrollo frontend con React y Next.js
• Integración con APIs REST
• Optimización de performance
• Trabajo colaborativo con UX/UI

Requisitos:
• 5+ años con React
• TypeScript avanzado
• Experiencia con Node.js
• Buenas prácticas de testing
`,

    matchingSkills: [
      'React',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Tailwind',
      'REST APIs',
    ],

    missingSkills: [
      'Kubernetes',
      'Terraform',
    ],

    recommendations: [
      'Aprender Kubernetes aumentaría tu match',
      'Agregar proyectos cloud mejoraría tu perfil',
      'Destacar experiencia con microservicios',
    ],

    compatibility: {
      technical: 95,
      experience: 90,
      cultural: 85,
    },
  };

  return (
    <div className="space-y-6">

      <Button
        variant="ghost"
        size="sm"
        onClick={() =>
          router.push('/dashboard/jobs')
        }
      >
        <ArrowLeft className="w-4 h-4 mr-2" />

        Volver
      </Button>

      {/* HEADER */}
      <div className="bg-card border border-border rounded-xl p-8">

        <div className="flex flex-col md:flex-row gap-6">

          <MatchScore
            score={job.matchScore}
            size="lg"
          />

          <div className="flex-1">

            <h1 className="text-3xl font-bold mb-2">
              {job.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {job.company}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>

              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {job.modality}
              </div>

              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {job.postedDate}
              </div>
            </div>

            <Button>
              Aplicar

              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-card border border-border rounded-xl p-6">

          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-500" />

            <h3>Skills Técnicos</h3>
          </div>

          <div className="text-3xl font-bold text-green-500">
            {job.compatibility.technical}%
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">

          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-500" />

            <h3>Experiencia</h3>
          </div>

          <div className="text-3xl font-bold text-blue-500">
            {job.compatibility.experience}%
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">

          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-purple-500" />

            <h3>Fit Cultural</h3>
          </div>

          <div className="text-3xl font-bold text-purple-500">
            {job.compatibility.cultural}%
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-card border border-border rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-500" />

            <h3>Skills coincidentes</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.matchingSkills.map((skill) => (
              <Badge
                key={skill}
                variant="success"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-amber-500" />

            <h3>Skills faltantes</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.missingSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="bg-card border border-border rounded-xl p-6">

        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-indigo-500" />

          <h3>Recomendaciones</h3>
        </div>

        <ul className="space-y-3">
          {job.recommendations.map((rec) => (
            <li
              key={rec}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />

              {rec}
            </li>
          ))}
        </ul>
      </div>

      {/* DESCRIPTION */}
      <div className="bg-card border border-border rounded-xl p-6">

        <h3 className="mb-4">
          Descripción del puesto
        </h3>

        <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
          {job.description}
        </div>
      </div>
    </div>
  );
}