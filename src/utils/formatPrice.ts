export default function formatPrice(
  currency: number,
  lang: string = "en-US",
  currencyCode: string = "USD"
): string {
  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currencyCode,
  }).format(currency);
}
