"use client";

import { useEffect, useState }
from 'react';

import { supabase }
from '@/lib/supabase';

import {
  User,
  TrendingUp,
  Award,
  Target,
  Edit,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Button } from "@/components/ui/button";

export default function ProfilePage() {

  useEffect(() => {

  const fetchProfile =
    async () => {

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } =
        await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

      if (error) {
        console.error(error);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

  fetchProfile();

}, []);
  const [profile, setProfile] =
  useState<any>(null);

const [loading, setLoading] =
  useState(true);

  const stats = {
  avgMatch: 85,
  applicationsCount: 12,
  savedJobs: 5,
};

  const marketTrends = [
    { skill: "React", demand: 95 },
    { skill: "TypeScript", demand: 88 },
    { skill: "Node.js", demand: 82 },
    { skill: "Python", demand: 78 },
    { skill: "AWS", demand: 85 },
    { skill: "Docker", demand: 72 },
  ];

  const skillGrowth = [
    { month: "Ene", score: 72 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 78 },
    { month: "Abr", score: 82 },
    { month: "May", score: 85 },
  ];

  if (loading) {
  return (
    <div className="p-8">
      Cargando perfil...
    </div>
  );
}

if (!profile) {
  return (
    <div className="p-8">
      No se encontró el perfil
    </div>
  );
}

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Mi Perfil
          </h1>

          <p className="text-muted-foreground mt-1">
            Gestioná tu perfil profesional
          </p>
        </div>

        <Button
          variant="outline"
          className="gap-2"
        >
          <Edit className="w-4 h-4" />
          Editar perfil
        </Button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* MATCH */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <Target className="w-5 h-5" />
            <span className="text-sm">
              Match Promedio
            </span>
          </div>

          <div className="text-3xl font-bold text-green-500 mb-1">
            {stats.avgMatch}%
          </div>

          <p className="text-sm text-muted-foreground">
            En las últimas 50 ofertas
          </p>
        </div>

        {/* APPLICATIONS */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <TrendingUp className="w-5 h-5" />

            <span className="text-sm">
              Aplicaciones
            </span>
          </div>

          <div className="text-3xl font-bold text-blue-500 mb-1">
            {stats.applicationsCount}
          </div>

          <p className="text-sm text-muted-foreground">
            Este mes
          </p>
        </div>

        {/* SKILLS */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <Award className="w-5 h-5" />

            <span className="text-sm">
              Skills Activas
            </span>
          </div>

          <div className="text-3xl font-bold text-purple-500 mb-1">
            {profile.skills.length}
          </div>

          <p className="text-sm text-muted-foreground">
            En tu perfil
          </p>
        </div>
      </div>

      {/* PROFILE + MARKET */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* PROFILE */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-5 h-5" />

            <h3 className="font-semibold">
              Información del perfil
            </h3>
          </div>

          <div className="space-y-6">
            {/* SENIORITY */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Seniority
              </p>

              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium">
                {profile.experience_level}
              </span>
            </div>

            {/* MODALITY */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Modalidad preferida
              </p>

              <div className="flex flex-wrap gap-2">
                {profile.preferred_modalities?.map((mod:string) => (
                  <span
                    key={mod}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Skills principales
              </p>

              <div className="flex flex-wrap gap-2">
                {profile.skills.slice(0, 6).map((skill:string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}

                {profile.skills.length > 6 && (
                  <span className="px-3 py-1 rounded-full bg-muted text-sm">
                    +{profile?.skills?.length || 0}
                  </span>
                )}
              </div>
            </div>

            <div>
         <p className="text-sm text-muted-foreground mb-2">
          Área profesional
          </p>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
          {profile.professional_area}
          </span>

          <div className= "mt-3">
          <p className="text-sm text-muted-foreground mb-2">
          Estudios
          </p>
          <span className="px-3 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
          {profile.education_level}
           </span>
          </div>
          </div>
          </div>
        </div>


        {/* MARKET */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5" />

            <h3 className="font-semibold">
              Demanda en el mercado
            </h3>
          </div>

          <div className="space-y-4">
            {marketTrends.map((trend) => (
              <div key={trend.skill}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">
                    {trend.skill}
                  </span>

                  <span className="text-sm font-medium text-purple-500">
                    {trend.demand}%
                  </span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-violet-600"
                    style={{
                      width: `${trend.demand}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Basado en ofertas activas en Argentina
          </p>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5" />

          <h3 className="font-semibold">
            Tu crecimiento profesional
          </h3>
        </div>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={skillGrowth}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              stroke="#9ca3af"
            />

            <YAxis stroke="#9ca3af" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
              }}
            />

            <Bar
              dataKey="score"
              fill="#4F46E5"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

        <p className="text-sm text-muted-foreground mt-4">
          Score de compatibilidad promedio por mes
        </p>
      </div>
    </div>
  );
}