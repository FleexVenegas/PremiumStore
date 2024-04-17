import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    Dispatch,
    SetStateAction,
} from "react";

// Definir el tipo para el estado del contexto
interface StateContextType {
    urlImage: string;
    setUrlImage: Dispatch<SetStateAction<string>>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [urlImage, setUrlImage] = useState<string>("");

    return (
        <StateContext.Provider
            value={{
                urlImage,
                setUrlImage,
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
