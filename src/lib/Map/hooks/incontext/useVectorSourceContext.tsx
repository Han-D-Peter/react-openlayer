import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useState,
} from "react";
import VectorSource from "ol/source/Vector";

interface VectorSourceContextType {
  registerVectorSource: (id: string, source: VectorSource) => void;
  unregisterVectorSource: (id: string) => void;
  getVectorSources: () => VectorSource[];
  getAllVectorSources: () => Map<string, VectorSource>;
  vectorSourcesCount: number;
}

const VectorSourceContext = createContext<VectorSourceContextType | null>(null);

export const VectorSourceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const vectorSourcesRef = useRef<Map<string, VectorSource>>(new Map());
  const [vectorSourcesCount, setVectorSourcesCount] = useState(0);

  const registerVectorSource = useCallback(
    (id: string, source: VectorSource) => {
      vectorSourcesRef.current.set(id, source);
      setVectorSourcesCount(vectorSourcesRef.current.size);
    },
    []
  );

  const unregisterVectorSource = useCallback((id: string) => {
    vectorSourcesRef.current.delete(id);
    setVectorSourcesCount(vectorSourcesRef.current.size);
  }, []);

  const getVectorSources = useCallback(() => {
    return Array.from(vectorSourcesRef.current.values());
  }, []);

  const getAllVectorSources = useCallback(() => {
    return new Map(vectorSourcesRef.current);
  }, []);

  return (
    <VectorSourceContext.Provider
      value={{
        registerVectorSource,
        unregisterVectorSource,
        getVectorSources,
        getAllVectorSources,
        vectorSourcesCount,
      }}
    >
      {children}
    </VectorSourceContext.Provider>
  );
};

export const useVectorSourceContext = () => {
  const context = useContext(VectorSourceContext);
  if (!context) {
    throw new Error(
      "useVectorSourceContext must be used within a VectorSourceProvider"
    );
  }
  return context;
};
