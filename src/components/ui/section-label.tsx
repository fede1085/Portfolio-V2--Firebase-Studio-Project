import * as React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return <p className="text-accent font-semibold mb-2">{children}</p>;
}

export { SectionLabel };
