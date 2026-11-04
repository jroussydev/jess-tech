import type { Config } from "@react-router/dev/config"
import { localCities } from "./src/data/localCities"

export default {
  appDirectory: "src",
  ssr: false,
  async prerender({ getStaticPaths }) {
    const cities = localCities.map((city) => `/localisation/${city.slug}`)
    return [...getStaticPaths(), ...cities, "/404"]
  },
} satisfies Config