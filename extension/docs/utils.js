// returns the iframe positioned at caret location
export function caretIframe() {
  return document.querySelector('iframe.docs-texteventtarget-iframe')
}

// returns the element that listens for various text events in google docs
function textEventNode() {
  return caretIframe().contentDocument.querySelector('body > div:nth-child(1)')
}

//.kix-page-paginated.canvas-first-page
export function caretPosition() {


  const caret = document.querySelector('.kix-cursor.docs-ui-unprintable')

  // if (caret.style.display !== 'none')
  //   return caret.getBoundingClientRect()

  // console.log('caret', caret.getBoundingClientRect())
  caret.style.display = 'block'

  const { width } = textEventNode().getBoundingClientRect()

  const parentWidth = document.querySelector('.kix-page-paginated').getBoundingClientRect().width
  const parentLeft = document.querySelector('.kix-page-paginated').getBoundingClientRect().left

  const editableSpans = textEventNode().querySelectorAll('span')

  let minLeft = 1000;
  let maxWidth = 0;
  for (let i = 0; i < editableSpans.length; i++) {
    if (editableSpans[i].getBoundingClientRect().width > maxWidth)
      maxWidth = editableSpans[i].getBoundingClientRect().width

    if (editableSpans[i].getBoundingClientRect().left < minLeft)
      minLeft = editableSpans[i].getBoundingClientRect().left
  }

  if (minLeft == 1000)
    minLeft = 0

  const left = parentLeft + (parentWidth - width) / 2 + minLeft + 5

  if (maxWidth < 400)
    maxWidth = 400

  caret.style.display = 'none'
  return { left, maxWidth }
}

// replace selected text in document to `value`

export function replaceSelection(value) {
  const clipboardData = new DataTransfer()
  clipboardData.setData('text/plain', value)
  textEventNode().dispatchEvent(new ClipboardEvent('paste', { clipboardData }))
}

export function getSelection() {
  textEventNode().dispatchEvent(new ClipboardEvent('copy'))
  return caretIframe().contentWindow.getSelection()
}
