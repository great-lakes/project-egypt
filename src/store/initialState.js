const initialState = {
  hubCreationForm: {
    hostname: '',
    cs: ''
  },
  hubs: [],
  deviceCreationForm: {
    deviceName: '',
    cs: '',
    ms: ''
  },
  devices: []

}

export default initialState

/**
 * {
 *   hubCreationForm: {
 *    hostname: '',
 *    cs: ''
 *   },
 *   hubs: [
 *    {
 *      hostname: '',
 *      cs: ''
 *    }
 *   ]
 * }
 */
