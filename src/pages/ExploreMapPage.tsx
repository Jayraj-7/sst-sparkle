import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Map, Clock } from 'lucide-react';
import IndiaMap from '@/components/IndiaMap';
import HistoryTimeline from '@/components/HistoryTimeline';

type Tab = 'map' | 'timeline';

export default function ExploreMapPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('map');

  return (
    <div className="min-h-screen pb-20 px-4 pt-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl bg-secondary">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-lg font-display font-bold">Explore</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setTab('map')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            tab === 'map' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
          }`}
        >
          <Map className="w-4 h-4" /> India Map
        </button>
        <button
          onClick={() => setTab('timeline')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
            tab === 'timeline' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
          }`}
        >
          <Clock className="w-4 h-4" /> History Timeline
        </button>
      </div>

      {tab === 'map' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xs text-muted-foreground mb-3">Tap any state to see its resources, industries, and key crops.</p>
          <IndiaMap />
        </motion.div>
      )}

      {tab === 'timeline' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-xs text-muted-foreground mb-3">Scroll horizontally and tap events to explore 1789–1947.</p>
          <HistoryTimeline />
        </motion.div>
      )}
    </div>
  );
}
