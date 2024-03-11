import {v4 as uuidv4} from 'uuid';
import ls from 'local-storage';

function getUserId() {
  let id;
  if (ls.get('LD_User_Key')) {
    id = ls.get('LD_User_Key');
  } else {
    id = uuidv4();
    ls.set('LD_User_Key', id)
  }
  return id;
}

export default getUserId;