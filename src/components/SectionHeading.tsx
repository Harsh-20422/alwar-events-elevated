interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${light ? "text-card" : "text-foreground"}`}>
        {title}
      </h2>
      <div className="flex justify-center mb-4">
        <div className="w-20 h-0.5 bg-secondary rounded-full" />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto ${light ? "text-card/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
