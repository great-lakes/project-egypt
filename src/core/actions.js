export const epicComplete = (actionType) => ({
  type: 'EPIC_COMPLETE',
  triggeringAction: actionType
})
