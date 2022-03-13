let selectedElement
let selectedByMouse = false
let dontShowTheBullet = false
var oldSelection = ''


window.addEventListener('resize', (event) => {
  if (document.getElementById('bulleto'))
    document.getElementById('bulleto').remove()

  if (document.getElementById('writesonic__root'))
    document.getElementById('writesonic__root').style.display = 'none'
})


var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}


async function initWritesonic(event) {

  const input = event.target
  const { moveWidget, showWidget } = await import('./utils.js')
  const { top, left, width, height } = input.getBoundingClientRect()

  console.log('ttt', top, left, width, height)
  // input.addEventListener('change', createBullet)
  // input.addEventListener('focus', createBullet)
  // input.addEventListener('keyup', createBullet)
  // input.addEventListener('paste', createBullet)
  // input.addEventListener('select', createBullet)
  // setTimeout(() => {
  //   createBullet()
  // }, 100);

  input.addEventListener('blur', () => {
    setTimeout(() => {
      if (document.getElementById('bulleto')) {
        document.getElementById('bulleto').remove()
        oldSelection = ''
      }
    }, 100)
  })

  input.addEventListener('keyup', (e) => {
    if (
      e.ctrlKey &&
      e.keyCode === 65 &&
      document.getElementById('bulleto') &&
      document.getElementById('bulleto').style.display === 'block'
    ) {
      document.getElementById('bulleto').click()
    }
  })

  var isclickDown = false;



  input.addEventListener('mousedown', event => {
    isclickDown = true;
  })



  input.addEventListener('mouseup', (event) => {
    isclickDown = false;
    setTimeout(() => {
      if (
        window.getSelection().toString() !== '' &&
        window.getSelection().extentNode.parentElement &&
        oldSelection != window.getSelection().toString() &&
        document.getElementById('writesonic-iframe')
      ) {

        if (document.getElementById('bulleto') == null)
          createBullet()

        oldSelection = window.getSelection().toString()


        selectedByMouse = true
        // const { top, left } = window
        //   .getSelection()
        //   .extentNode.parentElement.getBoundingClientRect()

        // moveWidget(event.top + 5 + height, event.clientX + 5)

        const { left } = input.getBoundingClientRect()

        let showTop = window.getSelection()
          .getRangeAt(0)
          .getBoundingClientRect().top + window.getSelection()
            .getRangeAt(0)
            .getBoundingClientRect().height + 5;

        if (showTop == 5)
          showTop = event.clientY + 5

        moveWidget(showTop, left)

        if (window.location.hostname === 'www.facebook.com') {
          selectedElement = document.activeElement
        } else if (window.location.hostname === 'mail.google.com') {
          selectedElement = document.querySelector('div[contenteditable=true]')
        } else {
          selectedElement = window.getSelection().extentNode.parentElement
        }
        chrome?.runtime?.sendMessage({
          changeText: window.getSelection().toString(),
          frameWidth: input.clientWidth
        })

      }

      else {
        setTimeout(() => {
          oldSelection = ''
        }, 1000);

        if (document.getElementById('bulleto'))
          document.getElementById('bulleto').remove()

        if (document.getElementById('writesonic__root'))
          document.getElementById('writesonic__root').style.display = 'none'
      }
    }, 110);
  })





  input.addEventListener('mouseleave', (event) => {
    if (isclickDown)
      setTimeout(() => {
        isclickDown = false
        if (
          window.getSelection().toString() !== '' &&
          window.getSelection().extentNode.parentElement &&
          document.getElementById('writesonic-iframe')
        ) {

          if (document.getElementById('bulleto') == null)
            createBullet()


          selectedByMouse = true
          // const { top, left } = window
          //   .getSelection()
          //   .extentNode.parentElement.getBoundingClientRect()

          // moveWidget(event.top + 5 + height, event.clientX + 5)

          const { left } = input.getBoundingClientRect()

          let showTop = window.getSelection()
            .getRangeAt(0)
            .getBoundingClientRect().top + window.getSelection()
              .getRangeAt(0)
              .getBoundingClientRect().height + 5;

          if (showTop == 5)
            showTop = event.clientY + 5

          moveWidget(showTop, left)

          if (window.location.hostname === 'www.facebook.com') {
            selectedElement = document.activeElement
          } else if (window.location.hostname === 'mail.google.com') {
            selectedElement = document.querySelector('div[contenteditable=true]')
          } else {
            selectedElement = window.getSelection().extentNode.parentElement
          }
          chrome?.runtime?.sendMessage({
            changeText: window.getSelection().toString(),
            frameWidth: input.clientWidth
          })

        }
        else {
          if (document.getElementById('bulleto'))
            document.getElementById('bulleto').remove()
        }
      }, 110);
  })



  //   selectedByMouse = true

  //   if (
  //     window.getSelection().toString() !== '' &&
  //     window.getSelection().extentNode.parentElement &&
  //     document.getElementById('writesonic-iframe')
  //   ) {
  //     const { top, left } = window
  //       .getSelection()
  //       .extentNode.parentElement.getBoundingClientRect()

  //     moveWidget(top - 30, left)

  //     if (window.location.hostname === 'www.facebook.com') {
  //       selectedElement = document.activeElement
  //     } else if (window.location.hostname === 'mail.google.com') {
  //       selectedElement = document.querySelector('div[contenteditable=true]')
  //     } else {
  //       selectedElement = window.getSelection().extentNode.parentElement
  //     }
  //     chrome?.runtime?.sendMessage({
  //       changeText: window.getSelection().toString(),
  //     })
  //   }
  // })


  function createBullet() {

    if (dontShowTheBullet && document.getElementById('bulleto')) {
      document.getElementById('bulleto').style.visibility = 'hidden'
    }
    if (document.getElementById('writesonic__root'))
      document.getElementById('writesonic__root').style.display = 'none'

    const text = input.tagName === 'DIV' ? input.innerHTML : input.value
    const showBullet =
      text?.split(' ').length > 4 && text?.split(' ').length < 101

    if (document.getElementById('bulleto') && showBullet) {
      document.getElementById('bulleto').style.display = 'block'
      return
    }

    if (
      document.getElementById('bulleto') &&
      (!showBullet || dontShowTheBullet)
    ) {
      document.getElementById('bulleto').remove()
      return
    }

    if (showBullet) {
      let bulletpoint = document.createElement('div')

      bulletpoint.id = 'bulleto'
      bulletpoint.style.width = `${height}px`
      bulletpoint.style.height = `${height}px`
      bulletpoint.style.top = `${top}px`
      bulletpoint.style.left = `${left + width - height}px`

      if (input.tagName === 'TEXTAREA' || input.tagName === 'DIV') {
        bulletpoint.style.width = `30px`
        bulletpoint.style.height = `30px`
        bulletpoint.style.top = `${top + height - 30}px`
        bulletpoint.style.left = `${left + width - 30}px`
      }

      bulletpoint.style.zIndex = `999999`
      bulletpoint.style.position = `fixed`
      bulletpoint.style.cursor = 'pointer'
      bulletpoint.style.backgroundImage = `url(${chrome?.runtime?.getURL(
        'favicon.png'
      )})`
      bulletpoint.style.backgroundSize = 'contain'

      bulletpoint.addEventListener('click', () => {
        input.focus()
        document.execCommand('selectAll', false, null)

        if (window.location.hostname === 'www.facebook.com') {
          selectedElement = document.activeElement
        } else if (window.location.hostname === 'mail.google.com') {
          selectedElement = document.querySelector('div[contenteditable=true]')
          // selectedElement = window.getSelection().extentNode.parentElement
        } else {
          selectedElement = window.getSelection().extentNode.parentElement
        }
        chrome?.runtime?.sendMessage({
          changeText: window.getSelection().toString(),
          frameWidth: input.clientWidth
        })

        moveWidget(top + 5, left)
        showWidget(true)
        // document.getElementById('bulleto').remove()
      })

      document.body.appendChild(bulletpoint)
    }
  }
}

chrome?.runtime?.onMessage.addListener((message) => {
  if (message.remove) {
    document.getElementById('bulleto').remove()
    document.getElementById('writesonic__root').remove()
  }

  if (message.updateText && message.from) {
    // if contenteditable div
    if (document.querySelector('div[contenteditable=true]')) {
      if (
        [
          'twitter.com',
          'www.linkedin.com',
          'medium.com',
          'mail.google.com',
        ].includes(window.location.hostname)
      ) {
        const selectedElementText = selectedElement.innerText.replace(
          message.from,
          message.updateText
        )

        oldSelection = ''

        selectedElement.click()
        selectedElement.focus()
        document.execCommand('selectAll', false, null)
        document.execCommand('insertText', false, selectedElementText)

        if (document.querySelectorAll('span[data-text="true"]').length === 0) {
          document.execCommand('undo', false)
        }
        selectedElement.innerText = selectedElement.innerText.replace(
          message.from,
          message.updateText
        )

        return true
      }

      if (['www.facebook.com'].includes(window.location.hostname)) {
        selectedElement
          .querySelectorAll('span[data-text="true"]')
          .forEach((textElement) => {
            if (textElement.innerHTML.includes(message.from)) {
              textElement.innerHTML = textElement.innerHTML.replace(
                message.from,
                message.updateText
              )
              if (
                document.querySelectorAll('span[data-text="true"]').length === 0
              ) {
                document.execCommand('undo', false)
              }
            }
          })
        return true
      }
    }

    if (document.querySelectorAll('input, textarea')) {
      // if input / textarea
      const focusElem = window.getSelection().focusNode

      if (focusElem)
        focusElem?.childNodes.forEach((node) => {
          if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
            node.value = node.value.replace(message.from, message.updateText)
          }
        })
    }
  }
})

chrome.storage.local.get(
  ['isLogged', 'activeSites'],
  ({ isLogged, activeSites }) => {
    if (isLogged && activeSites.includes(window.location.hostname)) {
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
      dontShowTheBullet = false
      startApp()
    }

    // if (
    //   key === 'activeSites' &&
    //   !newValue.includes(window.location.hostname)
    // ) {
    //   // removeAppFromPage()
    //   window.location.reload()
    // }

    if (
      key === 'activeSites' &&
      newValue.includes(window.location.hostname)
    ) {
      dontShowTheBullet = false
      startApp()
    }
  }
})

function startApp() {
  const app = document.createElement('div')

  app.id = 'writesonic__root'
  document.body.append(app)
  app.style.display = 'none'
  import(chrome?.runtime?.getURL('/ui/index.js'))

  document.addEventListener('mousedown', inputClick)

  // hide it when clicked outside
  // window.addEventListener('click', (e) => {
  //   if (
  //     document.getElementById('writesonic__root') &&
  //     document.getElementById('writesonic__root').style.display === 'block' &&
  //     !document.getElementById('writesonic__root').contains(e.target) &&
  //     !selectedByMouse
  //   ) {
  //     // push back state
  //     if (
  //       document
  //         .getElementById('writesonic-iframe')
  //         .contentWindow.document.querySelector('#writesonic-back')
  //     ) {
  //       document
  //         .getElementById('writesonic-iframe')
  //         .contentWindow.document.querySelector('#writesonic-back')
  //         .click()
  //     }

  //     // hide iframe
  //     if (e.target.id !== 'bulleto') {
  //       document.getElementById('writesonic__root').style.display = 'none'
  //     }
  //   }
  //   selectedByMouse = false
  // })

  // delete bullet on scroll
  window.onscroll = function () {
    selectedByMouse = false

    if (document.getElementById('writesonic__root'))
      document.getElementById('writesonic__root').style.display = 'none'
    if (document.getElementById('bulleto')) {
      document.getElementById('bulleto').remove()
    }
  }
}

function removeAppFromPage() {
  if (document.getElementById('writesonic__root'))
    document.getElementById('writesonic__root').remove()
  if (document.getElementById('bulleto'))
    document.getElementById('bulleto').remove()

  dontShowTheBullet = true
}

function inputClick(event) {

  console.log(event.target)


  if (event.target && ['INPUT', 'TEXTAREA', 'DIV'].includes(event.target.tagName)) {
    let parentDiv = null;
    let isEditable = false;
    if (event.target.tagName == 'DIV') {
      let parents = getParents(event.target)
      for (let i = 0; i < parents.length; i++) {
        if (parents[i].getAttribute('contenteditable')) {
          isEditable = true;
          parentDiv = parents[i];
          break;
        }
      }
    }
    else
      isEditable = true;

    if (!isEditable) {



      let parents = getParents(event.target)
      if (!parents.includes(document.getElementById('writesonic__root'))) {
        event.target.focus();
        // event.target.click();

        selectedByMouse = false

        if (document.getElementById('writesonic__root'))
          document.getElementById('writesonic__root').style.display = 'none'
        if (document.getElementById('bulleto')) {
          document.getElementById('bulleto').remove()
        }
      }
    }
    else {
      console.log('parentDiv', parentDiv)

      console.log(window.getSelection()
        .getRangeAt(0)
        .getBoundingClientRect())

      initWritesonic(event)
    }

  }
  else {
    let parents = getParents(event.target)
    if (!parents.includes(document.getElementById('writesonic__root'))) {
      event.target.focus();
      // event.target.click();

      selectedByMouse = false

      if (document.getElementById('writesonic__root'))
        document.getElementById('writesonic__root').style.display = 'none'
      if (document.getElementById('bulleto')) {
        document.getElementById('bulleto').remove()
      }
    }
  }
}


var getParents = function (elem) {

  // Set up a parent array
  var parents = [];

  // Push each parent element to the array
  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  }

  // Return our parent array
  return parents;

};