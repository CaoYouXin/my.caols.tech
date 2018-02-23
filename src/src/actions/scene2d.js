export const nextFrame = (key) => ({
  type: 'NEXT_SCENE2D_FRAME',
  key
});

export const prevFrame = (key) => ({
  type: 'PREV_SCENE2D_FRAME',
  key
});

export const sceneUpdatePercentage = (key, percentage) => ({
  type: 'UPDATE_SCENE2D',
  key,
  scene: { percentage }
});

export const sceneStartMoving = (key) => ({
  type: 'UPDATE_SCENE2D',
  key,
  scene: { moving: true }
});

export const sceneEndMoving = (key) => ({
  type: 'UPDATE_SCENE2D',
  key,
  scene: { moving: false }
});