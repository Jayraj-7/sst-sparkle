import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface StateInfo {
  name: string;
  resources: string[];
  industries: string[];
  crops: string[];
  minerals: string[];
}

const stateData: Record<string, StateInfo> = {
  MH: { name: 'Maharashtra', resources: ['Cotton', 'Sugarcane', 'Manganese'], industries: ['IT (Pune)', 'Textiles (Mumbai)', 'Film Industry'], crops: ['Cotton', 'Sugarcane', 'Rice'], minerals: ['Manganese', 'Bauxite', 'Iron Ore'] },
  KA: { name: 'Karnataka', resources: ['Coffee', 'Iron Ore', 'Gold'], industries: ['IT (Bangalore)', 'Silk', 'Aerospace'], crops: ['Coffee', 'Ragi', 'Rice'], minerals: ['Iron Ore', 'Gold (Kolar)', 'Manganese'] },
  TN: { name: 'Tamil Nadu', resources: ['Rice', 'Limestone', 'Lignite'], industries: ['Automobiles (Chennai)', 'Textiles (Coimbatore)', 'IT'], crops: ['Rice', 'Sugarcane', 'Cotton'], minerals: ['Limestone', 'Lignite', 'Granite'] },
  KL: { name: 'Kerala', resources: ['Rubber', 'Spices', 'Coconut'], industries: ['Tourism', 'Coir', 'Cashew Processing'], crops: ['Rubber', 'Tea', 'Spices'], minerals: ['Monazite', 'Ilmenite', 'Bauxite'] },
  AP: { name: 'Andhra Pradesh', resources: ['Rice', 'Tobacco', 'Mica'], industries: ['Pharmaceuticals', 'Shipbuilding (Vizag)', 'IT'], crops: ['Rice', 'Tobacco', 'Chillies'], minerals: ['Mica', 'Coal', 'Limestone'] },
  GJ: { name: 'Gujarat', resources: ['Cotton', 'Groundnut', 'Salt'], industries: ['Petrochemicals (Jamnagar)', 'Textiles (Ahmedabad)', 'Dairy'], crops: ['Cotton', 'Groundnut', 'Tobacco'], minerals: ['Petroleum', 'Natural Gas', 'Bauxite'] },
  RJ: { name: 'Rajasthan', resources: ['Marble', 'Wool', 'Solar Energy'], industries: ['Tourism', 'Gems & Jewelry', 'Textiles'], crops: ['Bajra', 'Jowar', 'Mustard'], minerals: ['Marble', 'Sandstone', 'Lead-Zinc'] },
  UP: { name: 'Uttar Pradesh', resources: ['Sugarcane', 'Wheat', 'Potatoes'], industries: ['Sugar Mills', 'Leather (Kanpur)', 'Handicrafts'], crops: ['Wheat', 'Sugarcane', 'Rice'], minerals: ['Limestone', 'Dolomite', 'Glass Sand'] },
  MP: { name: 'Madhya Pradesh', resources: ['Soybeans', 'Diamonds', 'Teak'], industries: ['Cotton Textiles', 'Jute', 'Paper'], crops: ['Soybean', 'Wheat', 'Rice'], minerals: ['Diamonds (Panna)', 'Coal', 'Manganese'] },
  WB: { name: 'West Bengal', resources: ['Jute', 'Tea', 'Rice'], industries: ['Jute Mills', 'Tea Industry', 'IT (Kolkata)'], crops: ['Rice', 'Jute', 'Tea'], minerals: ['Coal', 'Iron Ore', 'Dolomite'] },
  JH: { name: 'Jharkhand', resources: ['Coal', 'Iron Ore', 'Mica'], industries: ['Steel (Jamshedpur)', 'Heavy Engineering', 'Mining'], crops: ['Rice', 'Maize', 'Pulses'], minerals: ['Coal', 'Iron Ore', 'Copper'] },
  BR: { name: 'Bihar', resources: ['Rice', 'Lychee', 'Maize'], industries: ['Food Processing', 'Sugar', 'Silk'], crops: ['Rice', 'Wheat', 'Maize'], minerals: ['Mica', 'Limestone', 'Pyrite'] },
  OD: { name: 'Odisha', resources: ['Iron Ore', 'Bauxite', 'Chromite'], industries: ['Steel', 'Aluminium', 'Mining'], crops: ['Rice', 'Pulses', 'Oilseeds'], minerals: ['Iron Ore', 'Chromite', 'Bauxite'] },
  CG: { name: 'Chhattisgarh', resources: ['Iron Ore', 'Coal', 'Tin'], industries: ['Steel', 'Cement', 'Power'], crops: ['Rice', 'Maize', 'Kodo'], minerals: ['Iron Ore', 'Coal', 'Dolomite'] },
  PB: { name: 'Punjab', resources: ['Wheat', 'Rice', 'Cotton'], industries: ['Agriculture Equipment', 'Sports Goods', 'Textiles'], crops: ['Wheat', 'Rice', 'Cotton'], minerals: ['Limestone', 'Quartz', 'Gypsum'] },
  HR: { name: 'Haryana', resources: ['Wheat', 'Mustard', 'Dairy'], industries: ['Automobile (Gurgaon)', 'IT', 'Textiles'], crops: ['Wheat', 'Rice', 'Mustard'], minerals: ['Limestone', 'Quartzite', 'Slate'] },
  AS: { name: 'Assam', resources: ['Tea', 'Petroleum', 'Silk'], industries: ['Tea Processing', 'Oil Refineries', 'Silk'], crops: ['Tea', 'Rice', 'Jute'], minerals: ['Petroleum', 'Coal', 'Limestone'] },
  GA: { name: 'Goa', resources: ['Iron Ore', 'Fish', 'Cashew'], industries: ['Tourism', 'Mining', 'Pharmaceuticals'], crops: ['Rice', 'Cashew', 'Coconut'], minerals: ['Iron Ore', 'Manganese', 'Bauxite'] },
};

// Simplified SVG paths for major Indian states
const statePaths: Record<string, { d: string; cx: number; cy: number }> = {
  RJ: { d: 'M80,120 L130,100 L150,120 L160,160 L140,190 L100,200 L70,180 L60,140 Z', cx: 110, cy: 150 },
  GJ: { d: 'M50,180 L100,200 L110,230 L90,260 L60,260 L40,240 L30,210 Z', cx: 70, cy: 225 },
  MH: { d: 'M100,250 L150,230 L190,250 L200,290 L180,320 L130,330 L100,300 Z', cx: 150, cy: 285 },
  MP: { d: 'M130,180 L200,170 L230,190 L230,230 L200,250 L150,240 L130,210 Z', cx: 180, cy: 210 },
  UP: { d: 'M170,110 L230,90 L270,100 L280,130 L260,160 L220,170 L180,160 L160,140 Z', cx: 220, cy: 135 },
  BR: { d: 'M280,150 L320,140 L340,160 L330,180 L300,190 L270,175 Z', cx: 305, cy: 165 },
  WB: { d: 'M310,170 L340,160 L350,190 L340,230 L320,250 L300,230 L300,190 Z', cx: 325, cy: 205 },
  JH: { d: 'M270,180 L310,170 L310,200 L290,220 L260,210 L260,190 Z', cx: 285, cy: 195 },
  OD: { d: 'M260,220 L300,210 L320,240 L310,270 L270,280 L250,260 Z', cx: 285, cy: 250 },
  CG: { d: 'M230,230 L260,220 L270,250 L260,280 L230,280 L220,260 Z', cx: 245, cy: 255 },
  KA: { d: 'M120,320 L170,310 L190,340 L180,380 L140,390 L110,370 L110,340 Z', cx: 150, cy: 355 },
  TN: { d: 'M160,380 L200,360 L220,380 L210,420 L180,430 L155,410 Z', cx: 185, cy: 400 },
  KL: { d: 'M120,390 L150,380 L160,410 L150,445 L130,450 L115,420 Z', cx: 138, cy: 420 },
  AP: { d: 'M170,290 L220,270 L250,290 L240,330 L200,350 L170,330 Z', cx: 210, cy: 310 },
  PB: { d: 'M140,70 L170,60 L185,80 L175,105 L155,110 L135,95 Z', cx: 158, cy: 85 },
  HR: { d: 'M155,100 L180,95 L195,110 L190,130 L170,140 L155,125 Z', cx: 172, cy: 118 },
  AS: { d: 'M350,130 L400,120 L420,135 L410,155 L370,160 L345,150 Z', cx: 382, cy: 140 },
  GA: { d: 'M115,330 L130,325 L135,340 L125,350 L112,345 Z', cx: 123, cy: 338 },
};

export default function IndiaMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const info = selected ? stateData[selected] : null;

  return (
    <div className="w-full">
      <div className="relative">
        <svg viewBox="0 450 460 500" className="w-full" style={{ maxHeight: '50vh' }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Map outline background */}
          <rect x="0" y="0" width="460" height="500" fill="transparent" />

          {Object.entries(statePaths).map(([code, { d, cx, cy }]) => (
            <g key={code}>
              <motion.path
                d={d}
                fill={selected === code ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--secondary))'}
                stroke={selected === code ? 'hsl(var(--primary))' : 'hsl(var(--border))'}
                strokeWidth={selected === code ? 2 : 1}
                className="cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(selected === code ? null : code)}
                filter={selected === code ? 'url(#glow)' : undefined}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pointer-events-none select-none"
                fill="hsl(var(--foreground))"
                fontSize="8"
                fontWeight="600"
              >
                {code}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <AnimatePresence>
        {info && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass rounded-2xl p-5 mt-4 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <h3 className="font-display font-bold text-lg">{info.name}</h3>
              </div>
              <button onClick={() => setSelected(null)} className="p-1 rounded-lg bg-secondary">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">🏭 Industries</p>
                <ul className="space-y-0.5">
                  {info.industries.map((ind, i) => (
                    <li key={i} className="text-xs">{ind}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">🌾 Key Crops</p>
                <ul className="space-y-0.5">
                  {info.crops.map((c, i) => (
                    <li key={i} className="text-xs">{c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">⛏️ Minerals</p>
                <ul className="space-y-0.5">
                  {info.minerals.map((m, i) => (
                    <li key={i} className="text-xs">{m}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">📦 Resources</p>
                <ul className="space-y-0.5">
                  {info.resources.map((r, i) => (
                    <li key={i} className="text-xs">{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
