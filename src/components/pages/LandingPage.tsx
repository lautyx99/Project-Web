'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/NavBar';
import { JobCard } from '@/components/jobs/JobCard';
import { Brain, Target, TrendingUp, Zap } from 'lucide-react';

export function LandingPage() {
  const router = useRouter();

  const exampleJobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Argentina',
      location: 'Buenos Aires',
      modality: 'Remoto',
      salary: '$180k - $220k ARS',
      matchScore: 92,
      matchingSkills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      missingSkills: ['GraphQL']
    },
    {
      id: '2',
      title: 'Full Stack Engineer',
      company: 'Startup Innovadora',
      location: 'CABA',
      modality: 'Híbrido',
      salary: '$160k - $200k ARS',
      matchScore: 78,
      matchingSkills: ['React', 'Python', 'PostgreSQL'],
      missingSkills: ['AWS', 'Docker']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm mb-4">
            <Zap className="w-4 h-4" />
            Matching inteligente con IA
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            Encontrá trabajos que realmente
            <span className="block mt-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              coincidan con tu perfil
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dejá de perder tiempo aplicando a ofertas que no son para vos. Nuestro sistema analiza tus skills y te recomienda trabajos con porcentaje de compatibilidad real.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={() => router.push('/login')}>
              Comenzar ahora
            </Button>
            <Button variant="outline" size="lg">
              Ver demo
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
              <Brain className="w-6 h-6" />
            </div>
            <h3>Matching Inteligente</h3>
            <p className="text-muted-foreground text-sm">
              Algoritmo que compara tus skills con las ofertas laborales y calcula el porcentaje real de compatibilidad.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <h3>Análisis de Skills</h3>
            <p className="text-muted-foreground text-sm">
              Te mostramos qué skills tenés, cuáles te faltan, y cómo mejorar tu perfil para cada posición.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3>Recomendaciones Personalizadas</h3>
            <p className="text-muted-foreground text-sm">
              Sugerencias basadas en tu perfil, experiencia y el mercado laboral actual en Argentina.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-3">Ejemplos de matching inteligente</h2>
          <p className="text-muted-foreground">
            Así se ven las ofertas con score de compatibilidad
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {exampleJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2>Empezá a encontrar tu próximo trabajo</h2>
          <p className="text-muted-foreground">
            Creá tu perfil en menos de 3 minutos y empezá a recibir recomendaciones personalizadas.
          </p>
         <Button
          size="lg"
          onClick={() => router.push('/register')}
          >
  Crear mi perfil
</Button>
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]"></div>
              <span className="font-semibold">JobMatch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 JobMatch. Plataforma de búsqueda inteligente de empleo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
