function useForm() {
  let state: any = {}
  let formRules: any = []
  let errorInfo: object = {}

  const getValue = (name: string) => {
    return state[name]
  }

  const setValue = (name: string, value: any) => {
    state[name] = value
  }

  const setValues = (value: object) => {
    state = { ...state, ...value }
  }

  const ValidateRules = fn => {
    errorInfo = {}
    return new Promise((resolve, reject) => {
      for (let i of formRules) {
        for (let r of i.rules) {
          if (r.required) {
            !state[i.name] && (errorInfo[i.name] = r.message)
          }
          if (r.max) {
            state[i.name].length > r.max && (errorInfo[i.name] = r.message)
          }
        }
      }
      if (Object.keys(errorInfo).length) {
        fn(false, errorInfo)
        // reject()
      } else {
        fn(true)
        // resolve(state)
      }
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
    ValidateRules
  }
}

export default useForm
