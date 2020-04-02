
"use strict";

let DeleteCO2Source = require('./DeleteCO2Source.js')
let LoadExternalMap = require('./LoadExternalMap.js')
let AddRfidTag = require('./AddRfidTag.js')
let RegisterGui = require('./RegisterGui.js')
let DeleteRfidTag = require('./DeleteRfidTag.js')
let LoadMap = require('./LoadMap.js')
let MoveRobot = require('./MoveRobot.js')
let AddThermalSource = require('./AddThermalSource.js')
let AddSoundSource = require('./AddSoundSource.js')
let DeleteSoundSource = require('./DeleteSoundSource.js')
let DeleteThermalSource = require('./DeleteThermalSource.js')
let AddCO2Source = require('./AddCO2Source.js')

module.exports = {
  DeleteCO2Source: DeleteCO2Source,
  LoadExternalMap: LoadExternalMap,
  AddRfidTag: AddRfidTag,
  RegisterGui: RegisterGui,
  DeleteRfidTag: DeleteRfidTag,
  LoadMap: LoadMap,
  MoveRobot: MoveRobot,
  AddThermalSource: AddThermalSource,
  AddSoundSource: AddSoundSource,
  DeleteSoundSource: DeleteSoundSource,
  DeleteThermalSource: DeleteThermalSource,
  AddCO2Source: AddCO2Source,
};
