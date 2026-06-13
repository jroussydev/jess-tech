type LogoProps = {
  className?: string;
};

export default function Logo({ className = "h-12" }: LogoProps) {
  return (
    <img
      src="/logo/logo_simple.png"
      alt="Jess Tech"
      className={className}
    />
  );
}