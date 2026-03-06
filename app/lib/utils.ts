export const formatCurrency = (
  amount: number,
  currency?: string,
  noZeroes: boolean = false,
) => {
  const formatted = (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: currency ?? "USD",
  });

  if (noZeroes) {
    return formatted.replace(/\.00$/, "");
  }

  return formatted;
};

export const formatDate = ({
  date,
  options: defaultOptions,
}: {
  date: string;
  options?: Intl.DateTimeFormatOptions;
}): string => {
  const options: Intl.DateTimeFormatOptions = defaultOptions ?? {
    dateStyle: "short",
    timeStyle: "short",
  };

  const releaseFormat = new Date(date).toLocaleString("en-US", options);

  return releaseFormat;
};
