"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export interface TcpaConsentProps {
  senders: Array<{ name: string; id: string; }>;
  onChange?: (checked: Record<string, boolean>) => void;
  checked?: Record<string, boolean>;
}

export default function TcpaConsent({ senders, onChange, checked }: TcpaConsentProps) {
  const [localChecked, setLocalChecked] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    senders.forEach(sender => {
      initial[sender.id] = checked?.[sender.id] ?? false;
    });
    return initial;
  });

  useEffect(() => {
    setLocalChecked(prev => {
      const next: Record<string, boolean> = {};
      senders.forEach(sender => {
        next[sender.id] = checked?.[sender.id] ?? prev[sender.id] ?? false;
      });
      return next;
    });
  }, [checked, senders]);

  const handleToggle = (senderId: string, isChecked: boolean) => {
    setLocalChecked(prev => {
      const next = { ...prev, [senderId]: isChecked };
      onChange?.(next);
      return next;
    });
  };

  return (
    <fieldset className="mt-6 mb-4 border border-gray-200 rounded-md p-4 bg-gray-50">
      <legend className="font-semibold text-gray-800 mb-2 text-base">Souhlas s marketingem (TCPA)</legend>
      <p className="text-xs text-gray-600 mb-3">
        Zaškrtnutím souhlasíte s tím, že každý z níže uvedených subjektů vás může kontaktovat ohledně marketingových nabídek (telefonicky/SMS). Souhlas je konkrétní pro každého odesílatele a je logicky spojen s touto žádostí. Nejedná se o blanketní souhlas. Podrobnosti najdete v našich&nbsp;
        <Link href="/terms" className="underline text-blue-600" target="_blank">Obchodních podmínkách</Link> a&nbsp;
        <Link href="/privacy" className="underline text-blue-600" target="_blank">Zásadách ochrany osobních údajů</Link>.
      </p>
      <div className="space-y-2">
        {senders.map(sender => (
          <label key={sender.id} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={!!localChecked[sender.id]}
              onChange={e => handleToggle(sender.id, e.target.checked)}
              className="accent-blue-600"
              required
            />
            <span>{sender.name}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
