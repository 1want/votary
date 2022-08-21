function useForm() {
  let state: any = {}
  let formRules = []
  let errorInfo = []

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
    for (var i of formRules) {
      for (var r of i.rules) {
        if (r.required) {
          !state[i.name] && errorInfo.push(r.message)
        }
        if (r.max) {
          state[i.name].length > r.max && errorInfo.push(r.message)
        }
      }
      state[i.name]
    }
  }

  const setRules = (name, rules) => {
    formRules.push({ name, rules })
  }

  const submit = callback => {
    ValidateRules()
    console.log(errorInfo)
    callback(state)
  }

  return {
    state,
    getValue,
    setValue,
    setValues,
    submit,
    setRules
  }
}

export default useForm
