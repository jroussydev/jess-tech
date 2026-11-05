import type { MetaDescriptor } from "react-router"

const SITE_URL = "https://www.jesstech.fr"
const SITE_NAME = "Jess Tech"

type createMetaOptions = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}

export function createMeta({
  title,
  description,
  path,
  noIndex = false,
}: createMetaOptions): MetaDescriptor[] {
  const url = `${SITE_URL}${path}`

  const tags: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
  ]

  if (noIndex) {
    tags.push({ name: "robots", content: "noindex" })
  } else {
    tags.push({ tagName: "link", rel: "canonical", href: url })
  }

  return tags
}