"use client";

import { useRouter } from "next/navigation";

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
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({
  params,
}: JobDetailPageProps) {
  const router = useRouter();

  const job = {
    id: params.id || "1",

    title: "Senior React Developer",

    company: "MercadoLibre",

    location: "Buenos Aires, Argentina",

    modality: "Remoto",

    salary: "$200k - $250k ARS",

    postedDate: "Hace 3 días",

    matchScore: 95,

    description: `Estamos buscando un Senior React Developer para unirse a nuestro equipo de producto.

Responsabilidades:
• Desarrollar nuevas features para la plataforma web
• Colaborar con diseñadores y product managers
• Optimizar performance de aplicaciones React
• Participar en code reviews y mentoría
• Mantener y mejorar el design system

Requisitos:
• 5+ años de experiencia con React
• Sólido conocimiento de TypeScript
• Experiencia con Node.js y APIs REST
• Familiaridad con metodologías ágiles
• Inglés intermedio/avanzado`,

    matchingSkills: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "AWS",
      "Git",
      "REST APIs",
      "Agile",
    ],

    missingSkills: [
      "Kubernetes",
      "Terraform",
    ],

    recommendations: [
      "Completá un curso de Kubernetes para aumentar tu match al 98%",
      "Agregá experiencia con Terraform a tu perfil",
      "Destacá tus proyectos con microservicios",
    ],

    compatibility: {
      technical: 95,
      experience: 90,
      cultural: 85,
    },
  };

  return (
    <div className="space-y-8">
      {/* BACK BUTTON */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() =>
          router.push("/dashboard")
        }
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />

        Volver a búsqueda
      </Button>

      {/* HERO */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* MATCH */}
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold">
                  {job.matchScore}%
                </div>

                <div className="text-sm opacity-90">
                  Match
                </div>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">
              {job.title}
            </h1>

            <h2 className="text-xl text-muted-foreground mb-6">
              {job.company}
            </h2>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
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

            <Button
              size="lg"
              className="gap-2"
            >
              Aplicar en sitio original

              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* TECH */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-500" />

            <h4 className="font-semibold">
              Skills Técnicos
            </h4>
          </div>

          <div className="text-4xl font-bold text-green-500 mb-2">
            {job.compatibility.technical}%
          </div>

          <p className="text-sm text-muted-foreground">
            Excelente compatibilidad
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-blue-500" />

            <h4 className="font-semibold">
              Experiencia
            </h4>
          </div>

          <div className="text-4xl font-bold text-blue-500 mb-2">
            {job.compatibility.experience}%
          </div>

          <p className="text-sm text-muted-foreground">
            Muy buen nivel
          </p>
        </div>

        {/* CULTURE */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-purple-500" />

            <h4 className="font-semibold">
              Fit Cultural
            </h4>
          </div>

          <div className="text-4xl font-bold text-purple-500 mb-2">
            {job.compatibility.cultural}%
          </div>

          <p className="text-sm text-muted-foreground">
            Alto potencial
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* MATCHING */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle className="w-5 h-5 text-green-500" />

            <h3 className="text-lg font-semibold">
              Skills que tenés
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.matchingSkills.map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-5">
            {
              job.matchingSkills.length
            }{" "}
            de{" "}
            {job.matchingSkills.length +
              job.missingSkills.length}{" "}
            skills requeridas
          </p>
        </div>

        {/* MISSING */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <AlertCircle className="w-5 h-5 text-amber-500" />

            <h3 className="text-lg font-semibold">
              Skills faltantes
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.missingSkills.map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-5">
            No son bloqueantes, pero
            mejorarían mucho tu perfil
          </p>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-purple-500" />

          <h3 className="text-lg font-semibold">
            Recomendaciones para mejorar
            tu perfil
          </h3>
        </div>

        <ul className="space-y-4">
          {job.recommendations.map(
            (rec, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />

                <span className="text-sm text-muted-foreground">
                  {rec}
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* DESCRIPTION */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6">
          Descripción del puesto
        </h3>

        <div className="whitespace-pre-line text-muted-foreground leading-7">
          {job.description}
        </div>
      </div>
    </div>
  );
}