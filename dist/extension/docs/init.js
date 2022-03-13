var oldSelection = ''

async function refreshWidget(selection) {

  if (oldSelection != selection) {
    oldSelection = selection;
    console.log(oldSelection)
    const { caretPosition } = await import('./utils.js')
    const { moveWidget } = await import('../utils.js')

    const { left, maxWidth } = caretPosition()
    moveWidget(getMouseY() + 5, left)

    console.log('fixing width1', maxWidth, left)

    chrome?.runtime?.sendMessage({
      changeText: selection,
      frameWidth: maxWidth
    })
  }
  else {
    document.getElementById('writesonic__root').style.display = 'none'
  }
}

var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY + 10;
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}


async function initWritesonic() {
  const { replaceSelection, getSelection, caretIframe } = await import(
    './utils.js'
  )

  /** Handle text selection changes **/
  let selectionId = ''
  function checkSelection() {

    console.log('selecting......')
    const newSelection = getSelection()
    if (newSelection.extentNode.id === selectionId) {
      // document.getElementById('writesonic__root').style.display = 'none'


      return
    }

    selectionId = newSelection.extentNode.id
    const event = new Event('ws-selection-changed')
    event.value = newSelection.toString()
    dispatchEvent(event)
    // TODO: the above can be simplified at a loss of readability;
    //       check if `ws-selection-changed` can be consumed elseware like App.tsx
    //       by eliminating use of service worker for changeText message passing
    // refreshWidget(newSelection.toString())
  }

  addEventListener('ws-selection-changed', (e) => {
    refreshWidget(e.value)
  })

  document.addEventListener('mouseup', checkSelection)
  document.addEventListener('dbclick', checkSelection)
  
  document.addEventListener('mousedown', () => {
    if (document.getElementById('writesonic__root'))
      document.getElementById('writesonic__root').style.display = 'none'

  })
  caretIframe().contentDocument.addEventListener('keyup', checkSelection)


  document.querySelectorAll('*')
    .forEach((element) =>
      element.addEventListener('scroll', ({ target }) => {
        if (target.scrollTop !== 0) {
          document.getElementById('writesonic__root').style.display = 'none'
        }
      })
    )

  /** Handle text replacement **/
  chrome?.runtime?.onMessage.addListener((message) => {
    if (message.updateText) replaceSelection(message.updateText)
  })
}

// TODO: remainder of the code will be shared between all platform scripts
//       move it into a seperate module. Refer to issue #26 on github.
async function startApp() {
  const app = document.createElement('div')
  app.id = 'writesonic__root'
  document.body.append(app)
  app.style.display = 'none'
  await import(chrome?.runtime?.getURL('/ui/index.js'))
  await initWritesonic()
}

function removeAppFromPage() {
  document.getElementById('writesonic__root')?.remove()
}

chrome.storage.local.get(
  ['isLogged', 'activeSites'],
  ({ isLogged, activeSites }) => {
    if (isLogged && activeSites?.includes(location.hostname)) {
      startApp()
    }
  }
)

chrome.storage.onChanged.addListener(function (changes) {
  for (let [key, { newValue }] of Object.entries(changes)) {
    if (key === 'isLogged' && newValue === false) {
      removeAppFromPage()
    }

    if (key === 'isLogged' && newValue === true) {
      startApp()
    }

    if (key === 'activeSites' && newValue.includes(location.hostname)) {
      startApp()
    }

    if (key === 'activeSites' && !newValue.includes(location.hostname)) {
      location.reload()
    }
  }
})
