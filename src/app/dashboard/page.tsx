"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Search,
  SlidersHorizontal,
  DollarSign,
  MapPin,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const [showFilters, setShowFilters] =
    useState(true);

  const [selectedModality, setSelectedModality] =
    useState<string[]>([]);

  const [selectedSeniority, setSelectedSeniority] =
    useState<string[]>([]);

  const jobs = [
    {
      id: "1",
      title: "Senior React Developer",
      company: "MercadoLibre",
      location: "Buenos Aires",
      modality: "Remoto",
      salary: "$200k - $250k ARS",
      matchScore: 95,

      matchingSkills: [
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "AWS",
      ],

      missingSkills: ["Kubernetes"],
    },

    {
      id: "2",
      title: "Full Stack Engineer",
      company: "Auth0",
      location: "CABA",
      modality: "Híbrido",
      salary: "$180k - $220k ARS",
      matchScore: 88,

      matchingSkills: [
        "React",
        "Python",
        "PostgreSQL",
        "Docker",
      ],

      missingSkills: [
        "Redis",
        "Microservices",
      ],
    },

    {
      id: "3",
      title: "Frontend Developer",
      company: "Globant",
      location: "Buenos Aires",
      modality: "Remoto",
      salary: "$150k - $180k ARS",
      matchScore: 82,

      matchingSkills: [
        "React",
        "TypeScript",
        "CSS",
        "Tailwind",
      ],

      missingSkills: [
        "Next.js",
        "Testing Library",
      ],
    },

    {
      id: "4",
      title: "Sr. Software Engineer",
      company: "Despegar",
      location: "CABA",
      modality: "Híbrido",
      salary: "$190k - $230k ARS",
      matchScore: 78,

      matchingSkills: [
        "React",
        "Node.js",
        "MongoDB",
      ],

      missingSkills: [
        "AWS",
        "Lambda",
        "DynamoDB",
      ],
    },

    {
      id: "5",
      title: "Tech Lead Frontend",
      company: "Ualá",
      location: "Buenos Aires",
      modality: "Remoto",
      salary: "$220k - $280k ARS",
      matchScore: 72,

      matchingSkills: [
        "React",
        "TypeScript",
        "Leadership",
      ],

      missingSkills: [
        "Architecture",
        "Mentoring",
        "Mobile",
      ],
    },
  ];

  const toggleFilter = (
    value: string,
    setter: React.Dispatch<
      React.SetStateAction<string[]>
    >
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Empleos recomendados
        </h1>

        <p className="text-muted-foreground">
          {jobs.length} ofertas laborales
          coinciden con tu perfil
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

          <input
            type="text"
            placeholder="Buscar por título, empresa o tecnología..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="w-full h-12 rounded-xl border border-border bg-background pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <Button
          variant="outline"
          onClick={() =>
            setShowFilters(!showFilters)
          }
          className="gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />

          Filtros
        </Button>
      </div>

      {/* CONTENT */}
      <div className="flex gap-6">
        {/* SIDEBAR */}
        {showFilters && (
          <aside className="w-72 flex-shrink-0">
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24 space-y-6">
              {/* MODALITY */}
              <div>
                <h4 className="font-semibold mb-4">
                  Modalidad
                </h4>

                <div className="space-y-3">
                  {[
                    "Remoto",
                    "Híbrido",
                    "Presencial",
                  ].map((mod) => (
                    <label
                      key={mod}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedModality.includes(
                          mod
                        )}
                        onChange={() =>
                          toggleFilter(
                            mod,
                            setSelectedModality
                          )
                        }
                        className="w-4 h-4 rounded border-border"
                      />

                      <span className="text-sm">
                        {mod}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SENIORITY */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4">
                  Seniority
                </h4>

                <div className="space-y-3">
                  {[
                    "Junior",
                    "Semi-Senior",
                    "Senior",
                    "Lead",
                  ].map((sen) => (
                    <label
                      key={sen}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSeniority.includes(
                          sen
                        )}
                        onChange={() =>
                          toggleFilter(
                            sen,
                            setSelectedSeniority
                          )
                        }
                        className="w-4 h-4 rounded border-border"
                      />

                      <span className="text-sm">
                        {sen}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SALARY */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4">
                  Rango salarial
                </h4>

                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <DollarSign className="w-4 h-4" />

                  $100k - $300k ARS
                </div>
              </div>

              {/* SKILLS */}
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold mb-4">
                  Skills populares
                </h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "AWS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* JOBS */}
        <div className="flex-1 space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() =>
                router.push(`/job/${job.id}`)
              }
              className="bg-card border border-border rounded-2xl p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg transition-all"
            >
              {/* TOP */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />

                      {job.company}
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />

                      {job.location}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-semibold">
                  {job.matchScore}% Match
                </div>
              </div>

              {/* INFO */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-muted text-sm">
                  {job.modality}
                </span>

                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm">
                  {job.salary}
                </span>
              </div>

              {/* MATCHING */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">
                  Skills coincidentes
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.matchingSkills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* MISSING */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Skills faltantes
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.missingSkills.map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}