import {useState} from "react";
import Button from "react-bootstrap/Button";
import {MY_GREEN, MY_RED, MY_YELLOW} from "./misc";

const Line = props => {

  const [plc1, setPlc1] = useState("")
  const [plc2, setPlc2] = useState("")
  const [plc3, setPlc3] = useState("")
  const [plc4, setPlc4] = useState("")
  const [plc5, setPlc5] = useState("")
  const [clr1, setClr1] = useState("white")
  const [clr2, setClr2] = useState("white")
  const [clr3, setClr3] = useState("white")
  const [clr4, setClr4] = useState("white")
  const [clr5, setClr5] = useState("white")

  const checkLetters = () => {

    const guess = plc1 + plc2 + plc3 + plc4 + plc5
    const checkWord = (str) => /^[a-zA-Z]+$/.test(str)

    if (!checkWord(guess)) {
      window.alert('Enter letters only!')
    } else if (!(props.vocab.includes(guess))) {
      window.alert(`'${guess}' isn't in our dictionary!`)
      } else {
          const dct = JSON.parse(JSON.stringify(props.dct))

          setClr1(MY_RED)
          setClr2(MY_RED)
          setClr3(MY_RED)
          setClr4(MY_RED)
          setClr5(MY_RED)

          if (plc1 === props.ltr1) {
            setClr1(MY_GREEN)
            dct[plc1]--
          }
          if (plc2 === props.ltr2) {
            setClr2(MY_GREEN)
            dct[plc2]--
          }
          if (plc3 === props.ltr3) {
            setClr3(MY_GREEN)
            dct[plc3]--
          }
          if (plc4 === props.ltr4) {
            setClr4(MY_GREEN)
            dct[plc4]--
          }
          if (plc5 === props.ltr5) {
            setClr5(MY_GREEN)
            dct[plc5]--
          }

          if (plc1 in dct) {
            if (dct[plc1] !== 0) {
              if (clr1 !== MY_GREEN) {
                setClr1(MY_YELLOW)
                dct[plc1]--
              }
            }
          }

          if (plc2 in dct) {
            if (dct[plc2] !== 0) {
              if (clr2 !== MY_GREEN) {
                setClr2(MY_YELLOW)
                dct[plc2]--
              }
            }
          } else setClr2(MY_RED)

          if (plc3 in dct) {
            if (dct[plc3] !== 0) {
              if (clr3 !== MY_GREEN) {
                setClr3(MY_YELLOW)
                dct[plc3]--
              }
            }
          } else setClr3(MY_RED)

          if (plc4 in dct) {
            if (dct[plc4] !== 0) {
              if (clr4 !== MY_GREEN) {
                setClr4(MY_YELLOW)
                dct[plc4]--
              }
            }
          } else setClr4(MY_RED)

          if (plc5 in dct) {
            if (dct[plc5] !== 0) {
              if (clr5 !== MY_GREEN) {
                setClr5(MY_YELLOW)
                dct[plc5]--
              }
            }
          } else setClr5(MY_RED)


      if (guess === props.word) {
        props.checkWin(true)
      } else {
        props.checkWin(false)
      }
    }
  }

  const handleFocus = (e) => {
    const {maxLength, value, name} = e.target;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    const fieldEnd = fieldIntIndex + 5
    if (value.length >= maxLength) {
      if (fieldIntIndex < fieldEnd) {
        const nextField = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        )
        if (nextField !== null) {
          nextField.focus();
        }
      }
    }
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <input name={`field-${props.pr}1`} maxLength="1" value={plc1} type="text" disabled={props.tries !== props.pr}
             style={{width: '10%', fontSize: 18, textAlign: "center", margin: 2, backgroundColor: clr1}}
             onClick={() => setPlc1("")} autoFocus
             onChange={(e) => {
               setPlc1(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}2`} maxLength="1" value={plc2} type="text" disabled={props.tries !== props.pr}
             style={{width: '10%', fontSize: 18, textAlign: "center", margin: 2, backgroundColor: clr2}}
              onClick={() => setPlc2("")}
             onChange={(e) => {
               setPlc2(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}3`} maxLength="1" value={plc3} type="text" disabled={props.tries !== props.pr}
             style={{width: '10%', fontSize: 18, textAlign: "center", margin: 2, backgroundColor: clr3}}
              onClick={() => setPlc3("")}
             onChange={(e) => {
               setPlc3(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}4`} maxLength="1" value={plc4} type="text" disabled={props.tries !== props.pr}
             style={{width: '10%', fontSize: 18, textAlign: "center", margin: 2, backgroundColor: clr4}}
             onClick={() => setPlc4("")}
             onChange={(e) => {
               setPlc4(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />
      <input name={`field-${props.pr}5`} maxLength="1" value={plc5} type="text" disabled={props.tries !== props.pr}
             style={{width: '10%', fontSize: 18, textAlign: "center", margin: 2, backgroundColor: clr5}}
              onClick={() => setPlc5("")}
             onChange={(e) => {
               setPlc5(e.target.value.toLowerCase());
               handleFocus(e)
             }}
      />

      <Button variant="outline-success" disabled={props.tries !== props.pr}
              style={{marginLeft: 5, marginBottom: '1%', width: '12%',
                fontSize: 10, textAlign: "center"}}
              onClick={checkLetters}>
        GO
      </Button>

      <Button variant="outline-warning" disabled={props.tries !== props.pr}
              style={{marginLeft: 2, marginBottom: '1%', width: '12%',
                fontSize: 10, textAlign: "center"}}
              onClick={() => {setPlc1(""); setPlc2(""); setPlc3(""); setPlc4(""); setPlc5("");
              document.querySelector(`input[name=field-${props.pr}1]`).focus()}}>
        Clear
      </Button>

      <Button variant="outline-danger" disabled={props.tries !== props.pr}
              style={{marginLeft: 2, marginRight: 2,  marginBottom: '1%', width: '12%',
                fontSize: 10, textAlign: "center"}}
              onClick={() => props.checkWin(false)}>
        Pass
      </Button>
    </div>
  )
}

export default Line