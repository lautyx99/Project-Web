'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/layout/NavBar';

import { useAuth } from '@/context/AuthContext';

import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

export function OnboardingPageContent() {

  const router = useRouter();

  const { user } = useAuth();

  const [currentStep, setCurrentStep] =
    useState(1);

  const [skills, setSkills] =
    useState<string[]>([]);

  const [skillInput, setSkillInput] =
    useState('');

  const [professionalArea, setProfessionalArea] =
  useState('');

const [experienceLevel, setExperienceLevel] =
  useState('');

const [educationLevel, setEducationLevel] =
  useState('');

const [preferredModalities, setPreferredModalities] =
  useState<string[]>([]);

  const totalSteps = 5;

  const addSkill = () => {
    if (
      skillInput.trim() &&
      !skills.includes(skillInput.trim())
    ) {
      setSkills([
        ...skills,
        skillInput.trim(),
      ]);

      setSkillInput('');
    }
  };

  const removeSkill = (
    skill: string
  ) => {
    setSkills(
      skills.filter(
        (s) => s !== skill
      )
    );
  };

  const handleNext = async () => {

  if (currentStep < totalSteps) {
    setCurrentStep(currentStep + 1);
    return;
  }

  try {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,

        email: user.email,

        full_name:
          user.user_metadata
            ?.full_name || '',

        skills,

        professional_area:
          professionalArea,

        experience_level:
          experienceLevel,

        education_level:
          educationLevel,

        preferred_modalities:
          preferredModalities,
      });

    if (error) {
      console.error(error);
      return;
    }

    router.push('/dashboard');

  } catch (error) {
    console.error(error);
  }
};

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(
        currentStep - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-8">

          <div className="flex items-center gap-2 mb-4 text-purple-600">

            <Sparkles className="w-5 h-5" />

            <span className="text-sm font-medium">
              Hola{' '}
              {user?.user_metadata
                ?.full_name ||
                user?.email?.split(
                  '@'
                )[0]}
              ! Completemos tu
              perfil
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">

            <h2>
              Configurá tu perfil
            </h2>

            <span className="text-sm text-muted-foreground">
              Paso {currentStep}{' '}
              de {totalSteps}
            </span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* CARD */}
        <div className="bg-card border border-border rounded-xl p-8 min-h-[400px]">

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div className="space-y-6">

              <div>
                <h3 className="mb-2">
                  ¿Cuáles son tus
                  skills principales?
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  Agregá las
                  tecnologías y
                  habilidades que
                  dominás
                </p>
              </div>

              <div className="flex gap-2">

                <Input
                  placeholder="ej: React, Python..."
                  value={skillInput}
                  onChange={(e) =>
                    setSkillInput(
                      e.target.value
                    )
                  }
                />

                <Button
                  onClick={addSkill}
                >
                  Agregar
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">

                {skills.map(
                  (skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg"
                    >
                      <span>
                        {skill}
                      </span>

                      <button
                        onClick={() =>
                          removeSkill(
                            skill
                          )
                        }
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
  <div className="space-y-6">

    <div>
      <h3 className="mb-2">
        ¿En qué área trabajás?
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        Seleccioná el área profesional
        que mejor te representa
      </p>
    </div>

    <div className="grid gap-3">

      {[
        'Tecnología',
        'Diseño',
        'Marketing',
        'Ventas',
        'Administración',
        'Finanzas',
        'RRHH',
        'Educación',
        'Salud',
        'Atención al cliente',
      ].map((area) => (
        <button
          key={area}
          onClick={() =>
            setProfessionalArea(area)
          }
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            professionalArea === area
              ? 'border-[#4F46E5] bg-purple-50'
              : 'border-border hover:border-muted-foreground'
          }`}
        >
          {area}
        </button>
      ))}
    </div>
  </div>
)}

          {/* STEP 3 */}
          {currentStep === 3 && (
  <div className="space-y-6">

    <div>
      <h3 className="mb-2">
        ¿Cuál es tu nivel de experiencia?
      </h3>
    </div>

    <div className="grid gap-3">

      {[
        'Sin experiencia',
        'Junior',
        'Semi Senior',
        'Senior',
        'Management',
      ].map((level) => (
        <button
          key={level}
          onClick={() =>
            setExperienceLevel(level)
          }
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            experienceLevel === level
              ? 'border-[#4F46E5] bg-purple-50'
              : 'border-border hover:border-muted-foreground'
          }`}
        >
          {level}
        </button>
      ))}
    </div>
  </div>
)}

          {/* STEP 4 */}
          {currentStep === 4 && (
  <div className="space-y-6">

    <div>
      <h3 className="mb-2">
        ¿Cuál es tu nivel de estudios?
      </h3>
    </div>

    <div className="grid gap-3">

      {[
        'Secundario',
        'Terciario',
        'Universitario en curso',
        'Universitario completo',
        'Bootcamp',
        'Curso online',
        'Posgrado / Máster',
      ].map((education) => (
        <button
          key={education}
          onClick={() =>
            setEducationLevel(education)
          }
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            educationLevel === education
              ? 'border-[#4F46E5] bg-purple-50'
              : 'border-border hover:border-muted-foreground'
          }`}
        >
          {education}
        </button>
      ))}
    </div>
  </div>
)}

            {/* STEP 5 */}
            {currentStep === 5 && (
  <div className="space-y-6">

    <div>
      <h3 className="mb-2">
        ¿Qué modalidad laboral preferís?
      </h3>

      <p className="text-sm text-muted-foreground mb-4">
        Podés seleccionar más de una
      </p>
    </div>

    <div className="grid gap-3">

      {[
        'Remoto',
        'Híbrido',
        'Presencial',
        'Freelance',
        'Part-time',
        'Full-time',
      ].map((mod) => (
        <button
          key={mod}
          onClick={() =>
            setPreferredModalities((prev) =>
              prev.includes(mod)
                ? prev.filter(
                    (m) => m !== mod
                  )
                : [...prev, mod]
            )
          }
          className={`p-4 rounded-lg border-2 transition-all text-left ${
            preferredModalities.includes(mod)
              ? 'border-[#4F46E5] bg-purple-50'
              : 'border-border hover:border-muted-foreground'
          }`}
        >
          {mod}
        </button>
      ))}
    </div>
  </div>
)}
        </div>



        {/* BUTTONS */}
        <div className="flex items-center justify-between mt-8">

          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={
              currentStep === 1
            }
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
          >
            {currentStep ===
            totalSteps
              ? 'Finalizar'
              : 'Siguiente'}

            {currentStep <
              totalSteps && (
              <ChevronRight className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
