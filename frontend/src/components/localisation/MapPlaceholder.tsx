/**
 * Emplacement réservé à la carte, de la même taille qu'elle.
 * Affiché pendant le prerendering et le chargement de Leaflet,
 * pour que la page ne « saute » pas quand la carte apparaît.
 */
const MapPlaceholder = () => (
  <div
    aria-hidden="true"
    className="
      h-[320px]
      w-full
      bg-[#020817]

      sm:h-[380px]
      md:h-[420px]
      lg:h-[460px]
      xl:h-[480px]
    "
  />
);

export default MapPlaceholder;