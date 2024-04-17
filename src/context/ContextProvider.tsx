import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";

// Definir el tipo para el estado del contexto
interface StateContextType {
    urlImage: string;
    setUrlImage: Dispatch<SetStateAction<string>>;
    path: string;
    setPath: Dispatch<SetStateAction<string>>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [path, setPath] = useState("");
    const [urlImage, setUrlImage] = useState<string>(() => {
        // Intentamos obtener la url de la imagen desde el almacenamiento local
        const storedUrl = localStorage.getItem("urlImage");
        return storedUrl || ""; // Si existe, la usamos, de lo contrario, un valor por defecto
    });

    // Guardamos la url de la imagen en el almacenamiento local cada vez que cambie
    useEffect(() => {
        localStorage.setItem("urlImage", urlImage);
    }, [urlImage]);

    return (
        <StateContext.Provider
            value={{
                urlImage,
                setUrlImage,
                path,
                setPath,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = (): StateContextType => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error(
            "useContext debe ser utilizado dentro de un ContextProvider"
        );
    }
    return context;
};
