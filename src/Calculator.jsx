import React, { useState } from 'react'
import { Form, Label, Input, Button, } from './components/index.js'

export default function Calculator() {
  const [form, setForm] = useState({})
  const [resultValue, setResultValue] = useState(0)

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    })
  }

  function Result(value) {
    setResultValue(value)
  } 

  async function handleSubmit(event) {
    event.preventDefault();
    let value = 100 - ((form.partValue / form.fullValue) * 100)
    console.log(value)
    Result(value.toFixed(2))
  }
  
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <h1>Descubra percentual de desconto</h1>
      <Label htmlFor="fullValue">Digite o valor integral</Label>
      <Input id="fullValue" onChange={e => handleChange(e)} required></Input>
      <Label htmlFor="partValue">Digite o valor com desconto</Label>
      <Input id="partValue" onChange={e => handleChange(e)} required></Input>
      <Button id="calcular">Calcular</Button>
      <Label htmlFor="resultValue">O % de desconto foi de :</Label>
      <Input id="resultValue" value={resultValue} readOnly={true}></Input>
    </Form>
  );
}
