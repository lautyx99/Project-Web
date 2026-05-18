"use client";


import {
  MapPin,
  Briefcase,
  DollarSign,
  ArrowRight,
} from "lucide-react";

import { MatchScore } from "@/components/jobs/MatchScore";
import { MatchBadge} from "@/components/jobs/MatchBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  modality: string;
  salary?: string;
  matchScore: number;
  matchingSkills: string[];
  missingSkills: string[];
}

export function JobCard({
  id,
  title,
  company,
  location,
  modality,
  salary,
  matchScore,
  matchingSkills,
  missingSkills
}: JobCardProps) {
  return (
    <Link href={`/dashboard/jobs/${id}`}>
   <div
  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group"
>
      <div className="flex items-start gap-6">
        
        <MatchScore
          score={matchScore}
          size="md"
        />

        <div className="flex-1 min-w-0">
          
          <div className="flex items-start justify-between gap-4 mb-3">
            
              <MatchBadge score={matchScore} />

          <Badge variant="secondary">
            {modality}
          </Badge>
            
            <div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>

              <p className="text-muted-foreground">
                {company}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
            
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </div>

            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {modality}
            </div>

            {salary && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {salary}
              </div>
            )}
          </div>

          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2">
              Skills coincidentes
            </p>

            <div className="flex flex-wrap gap-2">
              {matchingSkills
                .slice(0, 5)
                .map((skill, index) => (
                  <Badge
                    key={index}
                    variant="default"
                  >
                    {skill}
                  </Badge>
                ))}

              {matchingSkills.length > 5 && (
                <Badge variant="secondary">
                  +{matchingSkills.length - 5}
                </Badge>
              )}
            </div>
          </div>

          {missingSkills.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2">
                Skills faltantes
              </p>

              <div className="flex flex-wrap gap-2">
                {missingSkills
                  .slice(0, 3)
                  .map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
              </div>
            </div>
            
          )}

          <Button
  variant="ghost"
  size="sm"
  className="group/button"
>
  Ver análisis completo

  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
</Button>
        </div>
      </div>
    </div>
    </Link>
  );
}