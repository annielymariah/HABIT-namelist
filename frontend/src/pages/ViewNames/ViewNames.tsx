import RootLayout from "@/components/layout/RootLayout";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export default function AddName() {
  const [names, setNames] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get("view/names")
      .then((response) => {
        const onlyNames = response.data.names.map((item: any) => item.name);
        setNames(onlyNames);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <RootLayout>
        <h1 className="text-3xl font-bold mb-6 text-center">
          Listagem de nomes
        </h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <div className="w-full max-w-md mx-auto space-y-3">
          {names.length > 0 ? (
            names.map((name, index) => (
              <div
                key={index}
                className="bg-white p-4 border border-gray-200 rounded"
              >
                <p className="text-gray-800 font-medium text-center">{name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Nenhum nome encontrado.</p>
          )}
        </div>
      </RootLayout>
    </div>
  );
}
