---
layout: "layouts/cat.njk"
excludeFromTheCollections: true
pagination:
  data: collections
  size: 1
  alias: tag
eleventyComputed:
  title: Tagged “{{ tag }}”
permalink: /tags/{{ tag }}/
---