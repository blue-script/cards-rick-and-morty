export const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("ru-RU")
}