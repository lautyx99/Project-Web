"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Navbar } from "@/components/layout/NavBar";
import { JobCard } from "@/components/jobs/JobCard";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Search,
  SlidersHorizontal,
  DollarSign,
} from "lucide-react";

export function DashboardPage() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const [selectedModality, setSelectedModality] = useState<string[]>([]);
  const [selectedSeniority, setSelectedSeniority] = useState<string[]>([]);

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
      missingSkills: ["Redis", "Microservices"],
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
      missingSkills: ["Next.js", "Testing Library"],
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
      missingSkills: ["AWS", "Lambda", "DynamoDB"],
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
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Empleos recomendados
          </h1>

          <p className="text-muted-foreground">
            {jobs.length} ofertas laborales que coinciden con tu perfil
          </p>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              placeholder="Buscar por título, empresa, tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>

          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex gap-6">
          {showFilters && (
            <aside className="w-72 flex-shrink-0">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">
                    Modalidad
                  </h4>

                  <div className="space-y-2">
                    {["Remoto", "Híbrido", "Presencial"].map(
                      (mod) => (
                        <label
                          key={mod}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedModality.includes(mod)}
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
                      )
                    )}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">
                    Seniority
                  </h4>

                  <div className="space-y-2">
                    {[
                      "Junior",
                      "Semi-Senior",
                      "Senior",
                      "Lead",
                    ].map((sen) => (
                      <label
                        key={sen}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSeniority.includes(sen)}
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

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">
                    Rango salarial
                  </h4>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    $100k - $300k ARS
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-3">
                    Skills populares
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>AWS</Badge>
                  </div>
                </div>
              </div>
            </aside>
          )}

          <div className="flex-1 space-y-4">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                {...job}
                onClick={() =>
                  router.push(`/job/${job.id}`)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}