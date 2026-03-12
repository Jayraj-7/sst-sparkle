import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  icon: string;
  category: 'world' | 'india' | 'movement';
}

const events: TimelineEvent[] = [
  { year: 1789, title: 'French Revolution', description: 'The French Revolution began, introducing ideas of liberty, equality, and fraternity. It transferred sovereignty from the monarchy to citizens and inspired nationalist movements worldwide.', icon: '🇫🇷', category: 'world' },
  { year: 1804, title: 'Napoleonic Code', description: 'Napoleon introduced the Civil Code (Napoleonic Code) establishing equality before law, right to property, and abolishing feudal privileges across his territories.', icon: '📜', category: 'world' },
  { year: 1815, title: 'Congress of Vienna', description: 'European powers met to restore conservative order after Napoleon\'s defeat. The Treaty of Vienna tried to undo changes of the Napoleonic era and restore monarchies.', icon: '🏰', category: 'world' },
  { year: 1848, title: 'Revolutions Across Europe', description: 'Liberal revolutions erupted across Europe demanding constitutionalism and national unification. The Frankfurt Parliament attempted to unite Germany democratically.', icon: '⚔️', category: 'world' },
  { year: 1857, title: 'Revolt of 1857', description: 'The first major armed resistance against British East India Company rule. Though it failed, it marked the beginning of organised resistance to British colonialism.', icon: '🗡️', category: 'india' },
  { year: 1885, title: 'Indian National Congress Founded', description: 'The Indian National Congress was established, becoming the primary vehicle of the Indian independence movement and the first modern nationalist movement in Asia.', icon: '🏛️', category: 'india' },
  { year: 1905, title: 'Partition of Bengal', description: 'Lord Curzon partitioned Bengal, sparking the Swadeshi Movement. Indians boycotted British goods and promoted Indian products, marking a shift toward mass politics.', icon: '📢', category: 'movement' },
  { year: 1914, title: 'World War I Begins', description: 'World War I (1914-18) reshaped global politics and economics. Indian soldiers fought for Britain, strengthening demands for self-rule.', icon: '💣', category: 'world' },
  { year: 1919, title: 'Jallianwala Bagh Massacre', description: 'General Dyer ordered firing on a peaceful gathering in Amritsar, killing hundreds. This horrific event united Indians against colonial rule and galvanized the freedom movement.', icon: '😢', category: 'india' },
  { year: 1920, title: 'Non-Cooperation Movement', description: 'Gandhi launched the Non-Cooperation Movement — boycotting British goods, institutions, and titles. It was called off in 1922 after violence at Chauri Chaura.', icon: '✊', category: 'movement' },
  { year: 1929, title: 'Great Depression Begins', description: 'The stock market crash triggered the worst economic downturn in history. Agricultural prices crashed in India, causing severe rural distress.', icon: '📉', category: 'world' },
  { year: 1930, title: 'Dandi March', description: 'Gandhi led 78 followers on a 240-mile march to Dandi to make salt, defying the British salt tax. This began the Civil Disobedience Movement.', icon: '🧂', category: 'movement' },
  { year: 1935, title: 'Government of India Act', description: 'This Act introduced provincial autonomy and set up a federal structure. It became the basis for the Indian Constitution after independence.', icon: '📋', category: 'india' },
  { year: 1939, title: 'World War II Begins', description: 'World War II (1939-45) further weakened colonial powers. India\'s support was enlisted without consultation, leading to Congress protest resignations.', icon: '🌍', category: 'world' },
  { year: 1942, title: 'Quit India Movement', description: 'Gandhi launched the "Do or Die" movement demanding immediate British withdrawal. Despite mass arrests of leaders, the movement spread across India.', icon: '🔥', category: 'movement' },
  { year: 1946, title: 'Cabinet Mission Plan', description: 'British Cabinet Mission proposed a plan for an undivided India with a weak center. Its failure led to the decision for partition.', icon: '📄', category: 'india' },
  { year: 1947, title: 'Indian Independence', description: 'India gained independence on August 15, 1947, after nearly 200 years of British rule. The country was partitioned into India and Pakistan.', icon: '🇮🇳', category: 'india' },
];

const categoryColors: Record<string, string> = {
  world: 'bg-primary/20 text-primary border-primary/30',
  india: 'bg-accent/20 text-accent border-accent/30',
  movement: 'bg-success/20 text-success border-success/30',
};

const categoryDots: Record<string, string> = {
  world: 'bg-primary',
  india: 'bg-accent',
  movement: 'bg-success',
};

export default function HistoryTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<TimelineEvent | null>(null);

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-[10px] text-muted-foreground">World</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="text-[10px] text-muted-foreground">India</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-success" />
          <span className="text-[10px] text-muted-foreground">Movement</span>
        </div>
      </div>

      {/* Scrollable timeline */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="relative flex items-start gap-0" style={{ minWidth: events.length * 110 }}>
          {/* Timeline line */}
          <div className="absolute top-8 left-4 right-4 h-0.5 bg-border" />

          {events.map((event, i) => (
            <motion.button
              key={event.year}
              className="relative flex flex-col items-center text-center shrink-0"
              style={{ width: 110 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setSelected(selected?.year === event.year ? null : event)}
            >
              {/* Dot */}
              <div className={`w-4 h-4 rounded-full border-2 border-background z-10 mt-6 ${categoryDots[event.category]}`} />

              {/* Year */}
              <span className="text-[10px] font-bold text-foreground mt-2">{event.year}</span>

              {/* Icon + title */}
              <motion.div
                className={`mt-1 rounded-xl px-2 py-1.5 border text-center ${categoryColors[event.category]} ${
                  selected?.year === event.year ? 'ring-2 ring-primary/50' : ''
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-lg leading-none">{event.icon}</div>
                <p className="text-[9px] font-medium mt-1 leading-tight" style={{ maxWidth: 80 }}>
                  {event.title}
                </p>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Selected event detail */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass rounded-2xl p-5 mt-3"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selected.icon}</span>
                <div>
                  <h4 className="font-display font-bold text-sm">{selected.title}</h4>
                  <span className="text-xs text-muted-foreground">{selected.year}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="p-1 rounded-lg bg-secondary">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{selected.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
