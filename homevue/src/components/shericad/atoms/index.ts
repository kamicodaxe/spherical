import { atom } from 'jotai'

export const toolsPanelHeightAtom = atom(0)

export const readOnlyToolsPanelHeightAtom = atom((get) => get(toolsPanelHeightAtom))

export const mousePositionAtom = atom({ x: 0, y: 0 })

export const toggleHotspotAtom = atom(false)