function useForm() {
  let state: any = {}
  let formRules: any = []
  let errorInfo: any = []

  const getValue = (name: string) => {
    return state[name]
  }

  const setValue = (name: string, value: any) => {
    state[name] = value
  }

  const setValues = (value: object) => {
    state = { ...state, ...value }
  }

  const ValidateRules = () => {
    errorInfo = []
    return new Promise((resolve, reject) => {
      for (var i of formRules) {
        for (var r of i.rules) {
          if (r.required) {
            !state[i.name] && errorInfo.push(r.message)
          }
          if (r.max) {
            state[i.name].length > r.max && errorInfo.push(r.message)
          }
        }
      }
      if (errorInfo.length) {
        reject(errorInfo)
      } else {
        resolve(state)
      }
    })
  }

  const setRules = (name, rules) => {
    formRules.push({ name, rules })
  }

  const submit = callback => {
    ValidateRules()
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
    submit
  }
}

export default useForm
