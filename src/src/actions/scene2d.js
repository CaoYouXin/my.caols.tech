export const nextFrame = (key) => ({
  type: 'NEXT_SCENE2D_FRAME',
  key
})

export const prevFrame = (key) => ({
  type: 'PREV_SCENE2D_FRAME',
  key
})