const GTAG_SCRIPT_SRC = 'https://www.googletagmanager.com/gtag/js'

export function ADD_GTAG(id) {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', id)
}
export function INIT_ANALYTICS() {
  const { VITE_GTAG_ID } = import.meta.env
  const script = document.createElement('script')
  script.src = GTAG_SCRIPT_SRC + '?id=' + VITE_GTAG_ID
  document.head.appendChild(script)
  ADD_GTAG(VITE_GTAG_ID)
}
