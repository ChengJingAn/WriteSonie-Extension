import { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import Widget from 'Widget'
import ShowButton from 'ShowButton'

let updateVisibility: Dispatch<SetStateAction<boolean>>,
  updateText: Dispatch<SetStateAction<string>>


let updatedFrameWidth: any = 400

chrome.runtime.onMessage.addListener(({ changeText, frameWidth }) => {
  const root = document.getElementById('writesonic__root') as HTMLElement
  if (!changeText || changeText.split(' ').length < 5) {
    root.style.display = 'none'



    updateVisibility(false)
    return
  }
  updatedFrameWidth = frameWidth;

  updateText(changeText)
  root.style.display = 'block'
  const bulleto = document.getElementById('bulleto')
  if (bulleto) bulleto.remove()
})

const App = () => {
  const [show, setShow] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  updateVisibility = setShow
  updateText = setText

  function clickFunc() {
    const dialog = document.getElementById('writesonic__root')
    if (dialog)
      dialog.style.display = 'none'
  }

  return (
    <div
      style={{
        // display: 'flex',
        // justifyContent: 'end',
        // flexDirection: 'column-reverse',
      }}
    >
      <div
        onClick={clickFunc}
        style={{
          zIndex: 9999, position: 'absolute', left: '30px', height: '30px', top: '0px', width: '2000px'
        }}
      >
      </div>
      <ShowButton setShow={setShow} />
      <Widget show={show} text={text} updatedFrameWidth={updatedFrameWidth} />

    </div>
  )
}

export default App
