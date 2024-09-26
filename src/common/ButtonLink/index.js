export const ButtonLink = ({
  link = "tel:000000000",
  text = "Zadzwoń do nas",
  bgColor = "#0147FF",
  textColor = "#F7F7F7",
}) => (
  <a
    href={link}
    className="
      text-[12px]
      sm:text-[15px]
      font-semibold
      px-2.5
      sm:px-4
      xl:px-6
      py-1.5
      sm:py-2
      xl:py-3
      tracking-[-0.02em]
      rounded-[8px]
      border-[1px]
      border-[#0147FF]"
    style={{
      backgroundColor: bgColor,
      color: textColor,
    }}
  >
    {text}
  </a>
);
