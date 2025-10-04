'use client';

import { createContext, useContext, useState } from 'react';
import { ActionState } from '.';

export const FormContext = createContext<ActionState>({} as ActionState);

export const FormProvider = ({
  state,
  children,
}: {
  state: ActionState;
  children: React.ReactNode;
}) => {
  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  return useContext(FormContext);
};
