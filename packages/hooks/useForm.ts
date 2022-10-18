import { useRef, useState } from 'react'

let state: any = {}
let formRules: any = []
let errorInfo: any = []
let instance: Array<any> = []

function FormStore() {
  const getValue = (name: string) => {
    return state[name]
  }

  const setValue = (name: string, value: any) => {
    state[name] = value
    subscribe(name)
  }

  const setValues = (value: object) => {
    state = { ...state, ...value }
  }

  const subscribe = s => {
    instance.push(s)
  }

  const notifi = () => {
    // instance.forEach(item => {
    //   console.log(item)
    // })
  }

  const ValidateRules = fn => {
    // errorInfo = {}
    return new Promise((resolve, reject) => {
      for (let i of formRules) {
        for (let r of i.rules) {
          if (r.required) {
            !state[i.name] && errorInfo.push({ username: r.message })
          }
          if (r.max) {
            // state[i.name].length > r.max && setError(r.message)
          }
        }
      }
      if (Object.keys(errorInfo).length) {
        fn(false, errorInfo)
        setValue('name', 'jack')
        // reject()
      } else {
        fn(true)
        // resolve(state)
      }
      // notifi()
    })
  }

  const setRules = (name: any, rules: any) => {
    formRules.push({ name, rules })
  }

  const submit = (callback: any) => {
    // ValidateRules()
    if (!errorInfo.length) {
      callback(state)
    }
  }

  return {
    state,
    getValue,
    setValue,
    setValues,
    setRules,
    submit,
    errorInfo,
    ValidateRules
  }
}

function useForm() {
  // const formRef = useRef()

  // if (!formRef.current) {
  //   const formStore = FormStore()
  //   formRef.current = formStore
  // }
  // return formRef.current
  return FormStore()
}

export default useForm
