import { createContext, type Dispatch, type PropsWithChildren, type SetStateAction, useContext, useState } from 'react';
import { type FormValues } from '../default-form-values';

const resumeContext = createContext<FormValues | undefined>(null);
const resumeUpdateContext = createContext<Dispatch<SetStateAction<FormValues | undefined>> | undefined>(null);

export const useResume = () => {
  const resume = useContext(resumeContext);
  if (resume === undefined) throw new Error('useResume must be used within ResumeProvider');
  return resume;
};

export const useResumeUpdate = () => {
  const setAuthUser = useContext(resumeUpdateContext);
  if (!setAuthUser) throw new Error('useResumeUpdate must be used within a ResumeProvider');
  return setAuthUser;
};

export function ResumeProvider({
  children,
  initialValue = null,
}: PropsWithChildren<{ initialValue?: FormValues | undefined }>) {
  const [resume, setResume] = useState<FormValues | undefined>(initialValue);

  return (
    <resumeContext.Provider value={resume}>
      <resumeUpdateContext.Provider value={setResume}>{children}</resumeUpdateContext.Provider>
    </resumeContext.Provider>
  );
}
