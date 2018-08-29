/* global localStorage */
export const getObjLocalStorage = (key, defVal) => {
  const raw = localStorage.getItem(key) || defVal
  return JSON.parse(raw)
}
