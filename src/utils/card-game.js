import { getPersonajes } from "../services/commonService"

const duplicate = (arr) => arr.concat(arr)
const assignIds = (arr) => arr.map((obj, key) => ({ key, ...obj }))

export const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)
export const getCards = async () => {
  try {
    const characters = await getPersonajes()
    const duplicated = duplicate(characters.slice(0, 6))
    return assignIds(duplicated)
  } catch (error) {
    return []
  }
}
