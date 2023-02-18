export const createApi = (axios: any, service: any) => {
  const { settings, methods } = service
  const instance = Object.create(axios.create(settings))
  assignMethodsToApi(instance, methods)
  handleApiErrorResponse(instance)

  return instance
}

export const assignMethodsToApi = (api: any, methods: any) => {
  Object.keys(methods).forEach((method) => {
    api[method] = methods[method](api)
  })
}

export const handleApiErrorResponse = (api: any) => {

  api.interceptors.response.use((response: any) => response, (error: any) => {
    if (error?.response?.status) {
      const code = parseInt(error.response.status) || 500

      switch (code) {
        case 500:
          // show user message that he is disconnected
          break
        case 404:
          // show user message not found
          break
        case 400: 
          // show user error message from server or say that something wrong
          break
        // case 401:
        //   break
        // case 403:
        //   break
        default:
          // show message that some error occured
          break
      }
    }

    return Promise.reject(error)
  })
}
