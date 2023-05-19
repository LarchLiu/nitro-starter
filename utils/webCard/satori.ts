import { html } from 'satori-html'
import _satori from 'satori'
import type { SatoriOptions } from 'satori'

export async function satori(component: string, options: SatoriOptions) {
  const markup = html(component)
  const result = await _satori(markup, options)
  return result
}
