export function CommonCard(title: string, content: string[], favicon: string, lang?: string) {
  const language = lang ?? 'zh-CN'
  const divContent = content.map((c, i) => {
    return `<div key="${i}" class="flex" lang="${language}">
    ${c}
    </div>
    `
  })
  const img = favicon
    ? `<img
  alt="favicon"
  width="64"
  height="64"
  src="${favicon}"
  class="rounded"
>`
    : '<svg v-else xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 256 256"><path fill="currentColor" d="M237.47 70.71a11.18 11.18 0 0 0-9.73-7.71l-38.43-3.25l-15-35a11.24 11.24 0 0 0-20.63 0l-15 35L100.27 63a11.12 11.12 0 0 0-6.36 19.54L123 107.38l-8.72 36.92a11.09 11.09 0 0 0 4.26 11.5a11.23 11.23 0 0 0 12.42.6l33-19.64l33.05 19.64a11.22 11.22 0 0 0 12.42-.6a11.07 11.07 0 0 0 4.25-11.5L205 107.38l29.08-24.83a11.08 11.08 0 0 0 3.39-11.84Zm-40.66 27.9a11.05 11.05 0 0 0-3.61 11l8.39 35.55l-31.83-18.92a11.23 11.23 0 0 0-11.52 0l-31.82 18.92l8.38-35.56a11 11 0 0 0-3.6-11l-27.89-23.81l36.85-3.12a11.2 11.2 0 0 0 9.37-6.74L164 31.17l14.48 33.76a11.19 11.19 0 0 0 9.36 6.74l36.86 3.12ZM84.24 124.24l-56 56a6 6 0 0 1-8.48-8.48l56-56a6 6 0 0 1 8.48 8.48Zm16 47.52a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48-8.48l56-56a6 6 0 0 1 8.48 0Zm72 0a6 6 0 0 1 0 8.48l-56 56a6 6 0 0 1-8.48-8.48l56-56a6 6 0 0 1 8.49 0Z" /></svg>'
  return `
  <div class="h-full w-full flex flex-col justify-between bg-white p-60px text-60px">
    <div class="flex flex-col">
      <div class="flex items-center text-40px font-bold" lang="${language}">
        ${title}
      </div>

      <div class="h-320px flex flex-col overflow-hidden pt-30px text-30px">
        ${divContent.join('\n')}
      </div>
    </div>
    <div class="flex items-center justify-end text-24px">
      ${img}
    </div>
  </div>
`
}
