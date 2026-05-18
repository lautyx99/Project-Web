'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/layout/NavBar';
import { useAuth } from '../../context/AuthContext';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

export function OnboardingPageContent() {
  const router = useRouter();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [seniority, setSeniority] = useState('');
  const [modality, setModality] = useState<string[]>([]);
  const [stack, setStack] = useState<string[]>([]);

  const totalSteps = 4;

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const toggleModality = (mod: string) => {
    setModality(prev =>
      prev.includes(mod) ? prev.filter(m => m !== mod) : [...prev, mod]
    );
  };

  const toggleStack = (tech: string) => {
    setStack(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/dashboard');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-purple-600">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">
              Hola {user?.name}! Completemos tu perfil
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2>Configurá tu perfil</h2>
            <span className="text-sm text-muted-foreground">
              Paso {currentStep} de {totalSteps}
            </span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 min-h-[400px]">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">¿Cuáles son tus skills principales?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Agregá las tecnologías y habilidades que dominás
                </p>
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="ej: React, Python, TypeScript..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                />
                <Button onClick={addSkill}>Agregar</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg">
                    <span>{skill}</span>
                    <button onClick={() => removeSkill(skill)}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {skills.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {skills.length} skills agregadas
                </p>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">¿Cuál es tu nivel de seniority?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Esto nos ayuda a mostrarte ofertas adecuadas
                </p>
              </div>

              <div className="grid gap-3">
                {['Junior', 'Semi-Senior', 'Senior', 'Lead/Staff'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSeniority(level)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      seniority === level
                        ? 'border-[#4F46E5] bg-purple-50'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <div className="font-medium">{level}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">¿Qué modalidad de trabajo preferís?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Podés seleccionar más de una opción
                </p>
              </div>

              <div className="grid gap-3">
                {['Remoto', 'Híbrido', 'Presencial'].map((mod) => (
                  <button
                    key={mod}
                    onClick={() => toggleModality(mod)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      modality.includes(mod)
                        ? 'border-[#4F46E5] bg-purple-50'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <div className="font-medium">{mod}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">¿Con qué stack trabajás?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Seleccioná las tecnologías que usás regularmente
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'Frontend',
                  'Backend',
                  'Full Stack',
                  'Mobile',
                  'DevOps',
                  'Data Science',
                  'QA',
                  'Design'
                ].map((tech) => (
                  <button
                    key={tech}
                    onClick={() => toggleStack(tech)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      stack.includes(tech)
                        ? 'border-[#4F46E5] bg-purple-50'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <div className="font-medium text-sm">{tech}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mt-8">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>

          <Button onClick={handleNext}>
            {currentStep === totalSteps ? 'Finalizar' : 'Siguiente'}
            {currentStep < totalSteps && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
