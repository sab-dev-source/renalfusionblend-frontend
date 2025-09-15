import { useEffect, useMemo, useState } from "react";

export function useImagePreload(urls: string[]) {
  const uniqueUrls = useMemo(() => Array.from(new Set(urls.filter(Boolean))), [urls]);
  const [loadedMap, setLoadedMap] = useState<Map<string, boolean>>(new Map());

  useEffect(() => {
    let cancelled = false;
    const localMap = new Map<string, boolean>();

    uniqueUrls.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        localMap.set(url, true);
        setLoadedMap(new Map(localMap));
      };
      img.onerror = () => {
        if (cancelled) return;
        localMap.set(url, false);
        setLoadedMap(new Map(localMap));
      };
      img.src = url;
    });

    return () => {
      cancelled = true;
    };
  }, [uniqueUrls]);

  const allLoaded = uniqueUrls.length > 0 && uniqueUrls.every((u) => loadedMap.get(u));

  return { loadedMap, allLoaded } as const;
}
