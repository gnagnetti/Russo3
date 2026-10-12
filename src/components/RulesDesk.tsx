import React, { useState } from 'react';
import { GRAMMAR_RULES } from '../data/rules';
import { useTutor } from '../context/TutorContext';
import {
  Search,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export const RulesDesk: React.FC = () => {
  const { setSelectedSection, setMode } = useTutor();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<number | 'all'>('all');
  const [expandedRuleId, setExpandedRuleId] = useState<string | null>(GRAMMAR_RULES[0]?.id || null);

  const filteredRules = GRAMMAR_RULES.filter((rule) => {
    if (selectedSectionFilter !== 'all' && rule.sectionId !== selectedSectionFilter) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const match =
        rule.title.toLowerCase().includes(q) ||
        rule.russianHeading.toLowerCase().includes(q) ||
        rule.ruleExplanationIt.toLowerCase().includes(q) ||
        rule.category.toLowerCase().includes(q) ||
        (rule.warningNote && rule.warningNote.toLowerCase().includes(q)) ||
        rule.examples.some((ex) => ex.ru.toLowerCase().includes(q) || ex.it.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const handlePracticeRule = (sectionId: 1 | 2 | 3) => {
    setSelectedSection(sectionId);
    setMode('tutor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-800 font-semibold mb-1 block">
          Manuale Glazunova (2011) · Guida Teorica
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Regole di Sintassi e Schede
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-2xl leading-relaxed">
          Tutti i box di commento grammaticale, i punti esclamativi (!) e le distinzioni sinonimiche
          spiegate in italiano con esempi russi dal manuale di O.I. Glazunova.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-8 bg-white p-3 sm:p-4 rounded-xl border border-stone-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cerca per regola, preposizione, autore..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>

        {/* Section Segmented Filter (Mobile Scrollable) */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg overflow-x-auto scrollbar-none -mx-1 px-1">
          <button
            onClick={() => setSelectedSectionFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedSectionFilter === 'all'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tutte ({GRAMMAR_RULES.length})
          </button>
          {[1, 2, 3].map((sId) => (
            <button
              key={sId}
              onClick={() => setSelectedSectionFilter(sId)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedSectionFilter === sId
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Sezione {sId}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Accordion / Cards List */}
      <div className="space-y-4">
        {filteredRules.map((rule) => {
          const isExpanded = expandedRuleId === rule.id;

          return (
            <div
              key={rule.id}
              className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedRuleId(isExpanded ? null : rule.id)}
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-left hover:bg-stone-50/70 transition-colors touch-manipulation"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] sm:text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded">
                      Sez. {rule.sectionId} · p. {rule.bookPage}
                    </span>
                    <span className="text-[11px] sm:text-xs text-stone-400 font-sans truncate">
                      {rule.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {rule.title}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-stone-600 italic mt-0.5 truncate">
                    {rule.russianHeading}
                  </p>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 text-amber-700' : ''
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-stone-100 bg-stone-50/30 animate-in fade-in duration-150">
                  {/* Italian In-depth Explanation */}
                  <div className="prose prose-sm max-w-none text-stone-700 mb-5 leading-relaxed text-xs sm:text-sm">
                    <p className="whitespace-pre-line">{rule.ruleExplanationIt}</p>
                  </div>

                  {/* Warning Note Box (!) */}
                  {rule.warningNote && (
                    <div className="p-3.5 sm:p-4 mb-5 rounded-lg bg-amber-50 border border-amber-200/90 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                        !
                      </span>
                      <div>
                        <span className="font-bold block mb-0.5">Avvertenza e nota del manuale (!):</span>
                        <p>{rule.warningNote}</p>
                      </div>
                    </div>
                  )}

                  {/* Comparisons if present */}
                  {rule.comparisons && rule.comparisons.length > 0 && (
                    <div className="mb-5 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                        Confronto e distinzione sintattica:
                      </h4>
                      {rule.comparisons.map((cmp, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3 rounded-lg bg-stone-100/70 border border-stone-200 text-xs sm:text-sm"
                        >
                          <div className="font-semibold text-stone-900 mb-1 flex items-center gap-2">
                            <span>{cmp.termA}</span>
                            <span className="text-stone-400">vs</span>
                            <span>{cmp.termB}</span>
                          </div>
                          <p className="text-stone-700 text-xs leading-relaxed mb-2">
                            {cmp.differenceIt}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif pt-2 border-t border-stone-200/60">
                            <div className="text-stone-800">
                              «{cmp.exampleA}»
                            </div>
                            <div className="text-stone-800">
                              «{cmp.exampleB}»
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Authentic Russian Examples */}
                  <div className="space-y-2 mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Esempi autentici dal testo:
                    </h4>
                    {rule.examples.map((ex, exIdx) => (
                      <div
                        key={exIdx}
                        className="p-3 rounded-lg bg-white border border-stone-200/80 text-xs sm:text-sm"
                      >
                        <p className="font-serif text-stone-900 text-sm sm:text-base font-medium">
                          «{ex.ru}»
                        </p>
                        <p className="text-stone-600 font-sans mt-0.5 text-xs italic">
                          → {ex.it}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA to practice this section */}
                  <div className="flex justify-end pt-3 border-t border-stone-200/60">
                    <button
                      onClick={() => handlePracticeRule(rule.sectionId)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 text-stone-100 rounded-lg text-xs font-medium hover:bg-stone-800 active:bg-stone-950 transition-colors shadow-sm touch-manipulation"
                    >
                      <span>Esercitati su questa sezione</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
