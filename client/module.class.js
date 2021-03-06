import {ModuleApp} from "@owd-client/core";

export default class RadioPoolsideModule extends ModuleApp {
  constructor(context) {
    super(context)
  }

  loadCommands({store}) {
    return {
      'poolsidefm': function () {
        console.log('LOL')
        store.dispatch('core/window/windowCreate', 'WindowRadioPoolsideFM');
      }
    }
  }
}