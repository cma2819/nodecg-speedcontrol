import { isEqual } from 'lodash';
import { bundleConfig, processAck } from './util/helpers'; // eslint-disable-line object-curly-newline, max-len
import { get } from './util/nodecg';
import { CheckList } from '../../types';

const nodecg = get();
const config = bundleConfig();

let checklistNum = 0;
const checklist = config.checklist.items ? config.checklist.items.map((item) => {
  checklistNum += 1;
  return {
    name: `${checklistNum}. ${item}`,
    complete: false,
  };
}) : [];

const checklistRep = nodecg.Replicant<CheckList>('checklist', {
  defaultValue: checklist,
});

if (checklistRep.value) {
  const currentNameList = checklistRep.value.map((item) => item.name);
  const defaultNameList = checklist.map((item) => item.name);
  if (!isEqual(currentNameList, defaultNameList)) {
    if (checklistRep.value.every((item) => item.complete)) {
      checklistRep.value = checklist.map((item) => ({
        name: item.name,
        complete: true,
      }));
    } else {
      checklistRep.value = checklist;
    }
  }
}

const toggleCheckbox = async (payload: {name: string; checked: boolean}): Promise<void> => {
  if (!checklistRep.value) {
    throw new Error('Cannot read replicant of checklist.');
  }
  const item = checklistRep.value.find(
    (replicant) => replicant.name === payload.name,
  );
  if (item) {
    item.complete = payload.checked;
  }
};

const resetChecklist = async (): Promise<void> => {
  if (!checklistRep.value) {
    throw new Error('Cannot read replicant of checklist.');
  }

  checklistRep.value.forEach((item, index) => { checklistRep.value[index].complete = false; });
};

if (config.checklist.enabled) {
  nodecg.listenFor('toggleCheckbox', (payload, ack) => {
    toggleCheckbox(payload)
      .then((list) => processAck(ack, null, list))
      .catch((err) => processAck(ack, err));
  });

  nodecg.listenFor('resetChecklist', (data, ack) => {
    resetChecklist()
      .then(() => processAck(ack, null))
      .catch((err) => processAck(ack, err));
  });
}
