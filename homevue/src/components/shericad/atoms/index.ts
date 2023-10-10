import { atom } from 'jotai'

export const toolsPanelHeightAtom = atom(0)

export const readOnlyToolsPanelHeightAtom = atom((get) => get(toolsPanelHeightAtom))