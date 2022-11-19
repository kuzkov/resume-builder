import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { FormValues } from "../default-form-values";

const resumeContext = createContext<FormValues | null>(null);
const resumeUpdateContext = createContext<Dispatch<
  SetStateAction<FormValues | null>
> | null>(null);

export const useResume = () => {
  const resume = useContext(resumeContext);
  if (resume === undefined)
    throw new Error("useResume must be used within ResumeProvider");
  return resume;
};

export const useResumeUpdate = () => {
  const setAuthUser = useContext(resumeUpdateContext);
  if (!setAuthUser)
    throw new Error(`useResumeUpdate must be used within a ResumeProvider`);
  return setAuthUser;
};

export const ResumeProvider = ({
  children,
  initialValue = null,
}: PropsWithChildren<{ initialValue?: FormValues | null }>) => {
  const [resume, setResume] = useState<FormValues | null>(initialValue);

  return (
    <resumeContext.Provider value={resume}>
      <resumeUpdateContext.Provider value={setResume}>
        {children}
      </resumeUpdateContext.Provider>
    </resumeContext.Provider>
  );
};
